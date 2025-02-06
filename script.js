/*
# Datatyper:
## Oppgaver
1. Lag variabel name, age, isLearningJs, putt inn forskjellige datatyper om deg selv
2. Console.log hver variabel
3. Bruk console log for å finne datatypen til en variabel
4. Lag en array av forskjellige ingredienser til en bakeoppskrift

# Funksjon
##Oppgaver
1. lag en funksjon som console.log 'Hello World'
2. Lag en funksjon som legger sammen 2 tall
3. Lag en funksjon med en variabel som har en array og console.log arrayet
*/

// Datatyper eksempler:
// // number
let age = 28;
console.log("Dette er variabel age = " + age);

// // string
const userName = "Julie";
console.log("Dette er variabel userName = " + userName);

// // boolean
let isTeaching = false;
console.log("Dette er variabel isTeaching = " + isTeaching);

// // undefined
let name;
console.log("Dette er variabel firstName = " + name);

// // array
let shoppingList = ["Såpe", "Mel", "Fjorland"];
console.log("Dette er variabel shoppingList = " + shoppingList);

let numberList = [0, 1, 2];
console.log("Dette er variabel numberList = " + numberList);

// // object
let firstObject = {
    name: "Julie", 
    age: 28,
    city: "Bergen"
};
console.log("Dette er variabel firstObject = " + firstObject);

// Variabel nøkkelord:
// // let
let firstName = "Julie";
firstName = "Juliana"; // Kan bytte verdi fordi det er en let variabel
console.log("Dette er variabel firstName = " + firstName);

// // const
const lastName = "Hauge";
// lastName = "Hugh"; // Vil ikke virke for lastName er en konstant variabel
console.log("Dette er variabel lastName = " + lastName);

console.log("---")

// // Sette sammen to string men som er tall gir oss et resultat som setter sammen to 'string'
let number1 = "45";
let number2 = "75";
let sum = number1 + number2;
console.log(sum); // 4575
console.log(typeof number1);
console.log(typeof number2);

// // Sette sammen to tall gir oss en kalkulasjon
number1 = 45;
number2 = 75;
sum = number1 + number2;
console.log(sum); // 120
console.log(typeof number1);
console.log(typeof number2);

// // Sette sammen et tall ogen string, konventerer begge variabler til 'string' og setter de sammen
number1 = 45;
number2 = "75";
sum = number1 + number2;
console.log(sum); // 4575
console.log(typeof number1);
console.log(typeof number2);


/* Oppgave i datatyper: */
const myName = "Julie";
console.log(myName)
console.log(typeof myName);
let myAge = 28;
console.log(myAge);
console.log(typeof myAge);
let isLearning = true;
console.log(isLearning);
console.log(typeof isLearning);

let muffins = ["Egg", "Mel", "Sukker", "Bakepulver", "Blåbær"];
console.log(muffins);
console.log(typeof muffins);


// Funksjoner

// // Regular function
function addNr() {
    console.log("Hello World")
    let bananas = 50;
    let apples = 73;

    let fruits = bananas + apples;
    console.log("Samlet antall frukt er = " + fruits);
};

addNr();

// // Arrow function
let secondFunction = () => {
    console.log("Dette er en arrow function");
};

secondFunction();

/* Oppgaver i funksjon */
function calculator() {
    console.log("Hello World Im a Calculator!")
    let firstNumber = 5;
    let secondNumber = 10;
    let summeryNumber = firstNumber + secondNumber;
    console.log("Kalkuleringen av " + firstNumber + " + " + secondNumber + " = " + summeryNumber);
};

calculator();