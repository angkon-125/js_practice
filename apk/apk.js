import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet, Alert } from 'react-native';
import { Audio } from 'expo-av';

const DEFAULT_MOTIVATIONS = [
  "তুমি পারবে!",
  "ছোট ছোট প্রচেষ্টা বড় ফল আনে।",
  "আজ যদি না করো, আগামীকাল করো!",
  "স্বাস্থ্যই সবচেয়ে বড় সম্পদ।",
  "প্রতিদিন একটু একটু করে উন্নতি করো।",
];

export default function App() {
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [activity, setActivity] = useState('sedentary');
  const [progress, setProgress] = useState([]);
  const [result, setResult] = useState(null);
  const [motivations, setMotivations] = useState(DEFAULT_MOTIVATIONS);
  const [currentMotivation, setCurrentMotivation] = useState('');
  const [newMotivation, setNewMotivation] = useState('');

  // Audio state
  const [sound, setSound] = useState();

  useEffect(() => {
    if (!result) {
      showRandomMotivation();
      const interval = setInterval(showRandomMotivation, 30000);
      return () => clearInterval(interval);
    }
  }, [result]);

  // Unload sound on unmount
  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  async function playSound() {
    // Replace this URL with your own audio file URL or local file
    const audioUrl = 'https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg';

    const { sound } = await Audio.Sound.createAsync(
      { uri: audioUrl },
      { shouldPlay: true }
    );
    setSound(sound);
  }

  function showRandomMotivation() {
    const randIndex = Math.floor(Math.random() * motivations.length);
    setCurrentMotivation(motivations[randIndex]);
  }

  const calculate = () => {
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);
    const ageNum = parseInt(age);

    if (isNaN(weightNum) || isNaN(heightNum) || isNaN(ageNum)) {
      Alert.alert('Error', 'দয়া করে সঠিক সংখ্যা প্রদান করুন।');
      return;
    }

    const bmr = 10 * weightNum + 6.25 * heightNum - 5 * ageNum + 5;

    const activityMultiplier = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      very: 1.725,
      extra: 1.9,
    }[activity.toLowerCase()] || 1.2;

    const maintenanceCalories = bmr * activityMultiplier;
    const deficitCalories = maintenanceCalories - 500;

    const protein = weightNum * 1.8;
    const fat = weightNum * 0.9;
    const carbs = (deficitCalories - (protein * 4 + fat * 9)) / 4;

    setResult({
      maintenanceCalories: Math.round(maintenanceCalories),
      deficitCalories: Math.round(deficitCalories),
      protein: Math.round(protein),
      fat: Math.round(fat),
      carbs: Math.round(carbs),
      weight: weightNum,
    });

    setProgress(prev => [...prev, { date: new Date().toLocaleDateString(), weight: weightNum }]);
    setCurrentMotivation('চমৎকার! চালিয়ে যাও...');
  };

  const addMotivation = (text) => {
    if (text.trim().length === 0) return;
    setMotivations(prev => [...prev, text.trim()]);
  };

  const removeMotivation = (index) => {
    setMotivations(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Weight Loss Tracker with Motivation & Audio</Text>

      <TextInput
        style={styles.input}
        placeholder="Age"
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
      />
      <TextInput
        style={styles.input}
        placeholder="Height (cm)"
        keyboardType="numeric"
        value={height}
        onChangeText={setHeight}
      />
      <TextInput
        style={styles.input}
        placeholder="Weight (kg)"
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />

      <Text style={styles.label}>Activity Level</Text>
      <TextInput
        style={styles.input}
        placeholder="sedentary, light, moderate, very, extra"
        value={activity}
        onChangeText={setActivity}
      />

      <Button title="Calculate & Save Progress" onPress={calculate} />

      {result && (
        <View style={styles.resultBox}>
          <Text>Maintenance Calories: {result.maintenanceCalories} kcal/day</Text>
          <Text>Deficit Calories: {result.deficitCalories} kcal/day</Text>
          <Text>Protein: {result.protein} g/day</Text>
          <Text>Fat: {result.fat} g/day</Text>
          <Text>Carbs: {result.carbs} g/day</Text>
        </View>
      )}

      <View style={styles.motivationBox}>
        <Text style={styles.motivationTitle}>Motivation</Text>
        <Text style={styles.motivationText}>{currentMotivation}</Text>
      </View>

      <View style={{ marginTop: 20 }}>
        <Text style={{ fontWeight: 'bold' }}>Add New Motivation Line:</Text>
        <TextInput
          style={styles.input}
          placeholder="Add motivation text"
          value={newMotivation}
          onChangeText={setNewMotivation}
        />
        <Button
          title="Add Motivation"
          onPress={() => {
            addMotivation(newMotivation);
            setNewMotivation('');
          }}
        />
      </View>

      <View style={{ marginTop: 20 }}>
        <Text style={{ fontWeight: 'bold' }}>Current Motivations:</Text>
        {motivations.map((m, i) => (
          <View
            key={i}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginVertical: 4,
            }}
          >
            <Text>{m}</Text>
            <Button title="Remove" color="red" onPress={() => removeMotivation(i)} />
          </View>
        ))}
      </View>

      <View style={{ marginTop: 30 }}>
        <Button title="Play Motivation Audio" onPress={playSound} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginVertical: 10 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
  },
  label: { marginTop: 10, fontWeight: 'bold' },
  resultBox: {
    backgroundColor: '#e0f7fa',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  motivationBox: {
    backgroundColor: '#fff9c4',
    padding: 10,a
    borderRadius: 5,
    marginTop: 20,
  },
  motivationTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  motivationText: {
    fontSize: 16,
    fontStyle: 'italic',
  },
});
// This code is a React Native application that allows users to track their weight loss journey.
// It includes features for calculating daily caloric needs, tracking progress, providing motivational quotes,


// new function for this apk
function playSound() {
  // code to play motivational audio
}

// and playing motivational audio. Users can input their age, height, weight, and activity level to get personalized recommendations.

// The app also allows users to add and remove motivational quotes, which are displayed randomly every 30 seconds.
// Additionally, users can play motivational audio to keep them inspired during their weight loss journey.
