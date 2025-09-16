// // Elements
// const noteForm = document.getElementById("note-form");
// const noteInput = document.getElementById("note-input");
// const noteList = document.getElementById("note-list");
// const searchInput = document.getElementById("search");
// const themeToggle = document.getElementById("theme-toggle");

// const imageInput = document.getElementById("image-input");
// const addImageBtn = document.getElementById("add-image");

// const recordAudioBtn = document.getElementById("record-audio");
// const stopAudioBtn = document.getElementById("stop-audio");

// const recordVideoBtn = document.getElementById("record-video");
// const stopVideoBtn = document.getElementById("stop-video");

// const reminderInput = document.getElementById("reminder-time");
// const setReminderBtn = document.getElementById("set-reminder");

// let notes = JSON.parse(localStorage.getItem("notes")) || [];
// let mediaRecorder;
// let chunks = [];

// // Save Notes
// function saveNotes() {
//     localStorage.setItem("notes", JSON.stringify(notes));
// }

// // Render Notes
// function renderNotes(filter = "") {
//     noteList.innerHTML = "";

//     notes
//         .filter(note => note.text?.toLowerCase().includes(filter.toLowerCase()))
//         .forEach((note, index) => {
//             const li = document.createElement("li");

//             if (note.type === "text") {
//                 li.innerHTML = `<span class="note-text">${note.text}</span>`;
//             } else if (note.type === "image") {
//                 li.innerHTML = `<img src="${note.src}" class="note-media" width="200">`;
//             } else if (note.type === "audio") {
//                 li.innerHTML = `<audio controls src="${note.src}" class="note-media"></audio>`;
//             } else if (note.type === "video") {
//                 li.innerHTML = `<video controls src="${note.src}" class="note-media" width="300"></video>`;
//             } else if (note.type === "reminder") {
//                 li.innerHTML = `<span class="note-text">⏰ Reminder set for: ${note.time}</span>`;
//             }

//             // Actions
//             const actions = document.createElement("div");
//             actions.className = "actions";

//             const delBtn = document.createElement("button");
//             delBtn.textContent = "Delete";
//             delBtn.onclick = () => {
//                 notes.splice(index, 1);
//                 saveNotes();
//                 renderNotes(filter);
//             };

//             actions.appendChild(delBtn);
//             li.appendChild(actions);
//             noteList.appendChild(li);
//         });
// }

// // Add Text Note
// noteForm.onsubmit = (e) => {
//     e.preventDefault();
//     const text = noteInput.value.trim();
//     if (text) {
//         notes.push({ type: "text", text });
//         saveNotes();
//         noteInput.value = "";
//         renderNotes(searchInput.value);
//     }
// };

// // Add Image
// addImageBtn.onclick = () => {
//     const file = imageInput.files[0];
//     if (file) {
//         const reader = new FileReader();
//         reader.onload = () => {
//             notes.push({ type: "image", src: reader.result });
//             saveNotes();
//             renderNotes(searchInput.value);
//         };
//         reader.readAsDataURL(file);
//     }
// };

// // Audio Recording
// recordAudioBtn.onclick = async () => {
//     const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//     mediaRecorder = new MediaRecorder(stream);
//     chunks = [];

//     mediaRecorder.ondataavailable = e => chunks.push(e.data);
//     mediaRecorder.onstop = () => {
//         const blob = new Blob(chunks, { type: "audio/webm" });
//         const url = URL.createObjectURL(blob);
//         notes.push({ type: "audio", src: url });
//         saveNotes();
//         renderNotes();
//     };

//     mediaRecorder.start();
//     recordAudioBtn.disabled = true;
//     stopAudioBtn.disabled = false;
// };

// stopAudioBtn.onclick = () => {
//     mediaRecorder.stop();
//     recordAudioBtn.disabled = false;
//     stopAudioBtn.disabled = true;
// };

// // Video Recording
// recordVideoBtn.onclick = async () => {
//     const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
//     mediaRecorder = new MediaRecorder(stream);
//     chunks = [];

//     mediaRecorder.ondataavailable = e => chunks.push(e.data);
//     mediaRecorder.onstop = () => {
//         const blob = new Blob(chunks, { type: "video/webm" });
//         const url = URL.createObjectURL(blob);
//         notes.push({ type: "video", src: url });
//         saveNotes();
//         renderNotes();
//     };

//     mediaRecorder.start();
//     recordVideoBtn.disabled = true;
//     stopVideoBtn.disabled = false;
// };

// stopVideoBtn.onclick = () => {
//     mediaRecorder.stop();
//     recordVideoBtn.disabled = false;
//     stopVideoBtn.disabled = true;
// };

// // Reminder
// setReminderBtn.onclick = () => {
//     const time = reminderInput.value;
//     if (time) {
//         notes.push({ type: "reminder", time });
//         saveNotes();
//         renderNotes();

//         const reminderTime = new Date(time).getTime();
//         const now = Date.now();
//         const delay = reminderTime - now;

//         if (delay > 0) {
//             setTimeout(() => {
//                 alert(`⏰ Reminder: ${time}`);
//             }, delay);
//         }
//     }
// };

// // Search
// searchInput.addEventListener("input", () => {
//     renderNotes(searchInput.value);
// });

// // Dark Mode
// themeToggle.onclick = () => {
//     document.body.classList.toggle("dark");
//     themeToggle.textContent = document.body.classList.contains("dark")
//         ? "☀️ Light Mode"
//         : "🌙 Dark Mode";
// };

// // Initial Render
// renderNotes();

// // Set initial state for buttons
// stopAudioBtn.disabled = true;
// stopVideoBtn.disabled = true;

// if (document.body.classList.contains("dark")) {
//     themeToggle.textContent = "☀️ Light Mode";
// } else {
//     themeToggle.textContent = "🌙 Dark Mode";

// }

// // Request Notification Permission
// if (Notification.permission !== "granted" && Notification.permission !== "denied")
//     Notification.requestPermission();
// else if (Notification.permission === "granted") {
//     new Notification("Welcome back to the Note Taking App!");
// }

// // Service Worker Registration
// if ( "serviceWorker" in navigator ) {
//     navigator.serviceWorker.register("/js_practice/array-practice/DOM/sw.js")
//     .then(reg => console.log("Service Worker Registered", reg))
//     .catch(err => console.log("Service Worker Registration Failed", err));
// }

// for (var i = 1; i <= 5; i++) {
//     switch (i) {
//         case 1:
//             console.log("One");
//             break;
//         case 2:
//             console.log("Two");
//             break;
//         case 3:
//             console.log("Three");
//             break;
//         case 4:
//             console.log("Four");
//             break;
//         case 5:
//             console.log("Five");
//             break;
//         default:
//             console.log("Unknown number");
//     }
// }

// for (var i = 1; i <= 7; i++) {
//     switch (i) {
//         case 1:
//             console.log("Monday");
//             break;
//         case 2:
//             console.log("Tuesday");
//             break;
//         case 3:
//             console.log("Wednesday");
//             break;
//         case 4:
//             console.log("Thursday");
//             break;
//         case 5:
//             console.log("Friday");
//             break;
//         case 6:
//             console.log("Saturday");
//             break;
//         case 7:
//             console.log("Sunday");
//             break;
//     }
// }
// for (var i = 1; i <= 10; i++) {
//     var remainder = i % 2;

//     switch (remainder) {
//         case 0:
//             console.log(i + ": Even");
//             break;
//         case 1:
//             console.log(i + ": Odd");
//             break;
//         default:
//             console.log(i + ": Undetermined");
//     }
// }

// for (var i = 1; i <= 12; i++) {
//     switch (i) {
//         case 1:
//             console.log("January");
//             break;
//         case 2:
//             console.log("February");
//             break;
//         case 3:
//             console.log("March");
//             break;
//         case 4:
//             console.log("April");
//             break;
//         case 5:
//             console.log("May");
//             break;
//         case 6:
//             console.log("June");
//             break;
//         case 7:
//             console.log("July");
//             break;
//         case 8:
//             console.log("August");
//             break;
//         case 9:
//             console.log("September");
//             break;
//         case 10:
//             console.log("October");
//             break;
//         case 11:
//             console.log("November");
//             break;
//         case 12:
//             console.log("December");
//             break;
//         default:
//             console.log("Unknown month");
//     }
// }

var str = "javascript";
var vowels = "aeiou";
var vowelCount = 0;
var consonantCount = 0;

for (var i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase();
    switch (char) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            vowelCount++;
            break;
        default:
            if (char >= 'a' && char <= 'z') {
                consonantCount++;
            }
    }
}
console.log("Vowels: " + vowelCount);
console.log("Consonants: " + consonantCount);




