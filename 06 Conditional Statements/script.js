// if and else conditionals

const age = 25;
if (age >= 18){
    console.log("you are an adult");
}else{
    console.log('you are a minor');
}
// if else if and else conditionals
const age2 = 15;
if (age2 >= 18);
else if (age2 >=13){
    console.log('you are a teenager');
}else{

}
    console.log('you are a child');

// switch case conditionals
const day = 7;
console.log(day);
switch (day){
    case 1:
        console.log('Monday');
        break;
        case 2:
            console.log('Tuesday');
            break;
        case 3:
            console.log('Wednesday');
            break;
        case 4:
            console.log('Thursday');
            break;
        case 5:
            console.log('Friday');
            break;
        case 6:
            console.log('Saturday');
            break;
        case 7:
            console.log('Sunday');
            break;
        default :
        console.log('invalid day');
        break;    
}
// ternary operator
const age3 = 20;
const isadult = (age3 >= 18) ? 'you are an adult ' : 'you are a minor';
console.log(isadult);
// nested if else conditionals
const age4 = 20;
if (age4 >= 18){
    console.log('you are an adult');
    if (age4 >= 21){
        console.log('you can drink alcohol');
    }
}

else{
    console.log('you are a minor');
    if (age4 >= 13){
        console.log('you are a teenager');
    }
    else{
        console.log('you are a child');
    }
    console.log('you are a child');
    console.logz('you are a child');

}


 
