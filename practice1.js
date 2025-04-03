// Random test
/* 
let tempNumber1 = 5;
let tempNumber2 = 7;
let name = ' Varun '
let judge = false;
let a;

if  (judge) {
    let newTemp = 6;
    a= "Magic";
    a="10";
    console.log(name, tempNumber1, newTemp, tempNumber2, a);
    console.log("It is working");
    } else { console.log(tempNumber2);
        console.log("Error in Working");
    }
 */
/*--------------------------------------------------------------------------------------------*/

// Objects
/*   const student = {
        fullName: "Varun Talwar",
        marks: 80,
        age: 30,
        college: "Apna College",
        pass: true
    };

    let newYear= true;

    console.log(student.fullName, student.age);

    if(newYear){
        
        
        console.log(++student.age);
        student.fullName= "Gandu Aadmi";
        
        console.log(student.age, student.fullName);

    } else{ console.log(student.age, student.fullName)}

    console.log(student.fullName, student.age); */

/* onclick.console.log(student["fullName"]); */

/*   for(let i=0; i<=100; i++){
        if(i%2==0){
            console.log("i=", i, "Its is Even")
        }
    }; */
/*--------------------------------------------------------------------------------------------*/
// Guess the Number Game
/* 
    let gameNum=25;
    let userNum= prompt(" Guess the Game Number:");
        if( gameNum==userNum)
        { console.log("You are Correct, the Number is :", gameNum)

        } else {
            while (gameNum!= userNum)
                {
                let userNum= prompt(" Guess the Game Number:");
                console.log(userNum);
                    if (gameNum==userNum){
                        console.log("You are correct, the number is :", gameNum);
                        break;
                    } else { console.log("Try Again")};
                }
            } */

/* let gameNum=25;
let userNum= prompt(" Guess the Game Number:");

while (userNum!= gameNum){
    userNum= prompt("You entered wrong number. Guess Again:");
}

console.log("Congratulations, you entered the right number!!!"); */

/*--------------------------------------------------------------------------------------------*/
// Courcera Question practice
/* const sales = [
    { item: "Laptop", quantity: 2, price: 800 },
    { item: "Monitor", quantity: 1, price: 150 },
    { item: "Mouse", quantity: 4, price: 25 }
];
function calculateTotalSales(sales) {
    let total = 0;
    for (let i = 0; i < sales.length; i++) {
        total += sales[i].quantity * sales[i].price;
    }
    return total;
}
console.log("Total Sales Amount:", calculateTotalSales(sales)); */

/*--------------------------------------------------------------------------------------------*/

/* const orders = [
    { item: "Espresso", quantity: 2, price: 3.5 },
    { item: "Latte", quantity: 3, price: 4.0 },
    { item: "Cappuccino", quantity: 1, price: 4.5 }
];
function generateReceipt(orders) {
    let grandTotal = 0;
    console.log("Receipt:");
    console.log("----------------------");
    for (let i = 0; i < orders.length; i++) {
        const itemTotal = orders[i].quantity * orders[i].price;
        grandTotal += itemTotal;
        console.log(`${orders[i].item} - Quantity: ${orders[i].quantity}, Price: $${orders[i].price}, Total: $${itemTotal}`);
    }
    console.log("----------------------");
    console.log(`Grand Total: $${grandTotal}`);
}
generateReceipt(orders); */

/*--------------------------------------------------------------------------------------------*/

/* const passwords = ["Password123", "short", "ValidPass123", "too_long_password_example", "12345"];
function validatePasswords(passwords) {
    const regex = /^[a-zA-Z0-9]{8,20}$/;
    for (let i = 0; i < passwords.length; i++) {
        if (regex.test(passwords[i])) {
            console.log(`${passwords[i]} is valid.`);
        } else {
            console.log(`${passwords[i]} is invalid.`);
        }
    }
}
validatePasswords(passwords); */

/*--------------------------------------------------------------------------------------------*/

/* const products = [
    { product: "Laptop", stock: 5 },
    { product: "Headphones", stock: 0 },
    { product: "Smartphone", stock: 3 }
];
function checkStockLevels(products) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].stock > 0) {
            console.log(`${products[i].product} is In Stock.`);
        } else {
            console.log(`${products[i].product} is Out of Stock.`);
        }
    }
}
checkStockLevels(products);  */
/* ----------------------------------------------------------- */

/*--------------------------------------//Functions----------------------------------------------------*/

// Proper Case Function

/* const properCase = (string) =>  {
    return `${string[0].toUpperCase()}${string.slice(1).toLowerCase()}`;
};

console.log(properCase("random shit")); */
//`${string[0].toUppercase()}${string.slice(1)}.toLowercase()}`;

/* const properCase2 = (string) => {
    let s;
    let news;
    return {
        s = string.split(" "),
        news =`${s[0].toUpperCase()}${s.slice(1).toLowerCase()}`,
    }

}; */
/*--------------------------------------------------------------------------------------------*/
/* const properCase2 = (string) => {
    let words = string.split(" ");
    let properCaseWords = words.map(word => 
        `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`
    );
    return properCaseWords.join(" ");
}
console.log(properCase2("random shit")); // Outputs: "Random Shit"


const properCase2 = (string) => 
    string.replace(/\w+/g, word => 
        word[0].toUpperCase() + word.slice(1).toLowerCase()
    );

console.log(properCase2("random shit")); // Outputs: "Random Shit" */

/*--------------------------------------------------------------------------------------------*/

// Proper Case Function
/* const properCase = (string) => {
    return string.split(' ')
        .map(word => `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`)
        .join(' ');
};

console.log(properCase("random shit")); */

/*--------------------------------------------------------------------------------------------*/
/* function map(f, a) {
    const result = new Array(a.length);
    for (let i = 0; i < a.length; i++) {
      console.log("before Call");
      result[i] = f(a[i]);
      console.log("after Call");
    }
    return result;
  }
  
  const numbers = [0, 1, 2, 5, 10];
  const cubedNumbers = map(function (x) {
    console.log("F Funcion called")
    return x * x * x;
  }, numbers);
  console.log(cubedNumbers); */

/*----------------------------------------------------------------*/
/*   function properCase (f, a) {
    const result = new Array(a.length);
    for (let i = 0; i < a.length; i++) {
      result[i] = f(a[i]);
    }
    return result;
  } */

/*   function properCase(f, a) {
    if (typeof f !== 'function') {
      throw new Error('First argument must be a function');
    }
    if (!Array.isArray(a)) {
      throw new Error('Second argument must be an array');
    }
  
    const result = [];
    for (let i = 0; i < a.length; i++) {
      result.push(f(a[i]));
    }
    return result;
  }



  const arr = ["sachin", "raghav", "vipul", "dinesh", "chirag"];
  const converted = properCase(function (w) {
    let newName = "sachin";
    if(w == newName){
    return `${w[0].toUpperCase()}${w.slice(1).toLowerCase()}`;
    } else {
    return console.log("first name does not match"); 
     }
  }, arr); */

/*--------------------------------------------------------------------------------------------*/

//Curry Functions

/* const buildSandwich = (ingredient1) => {
    return (ingredient2) => {
        return (ingredient3) => {        
            return `A sandwich with ${ingredient1}, ${ingredient2}, and ${ingredient3}`;
        }
    }
}
const mySandwich = buildSandwich('bread')('cheese')('tomato');
console.log(mySandwich);

const buildSammy = ingred1 => ingred2 => ingred3 =>
        `A Sammy with ${ingred1}, ${ingred2}, and ${ingred3}`;

const mySammy = buildSammy('bread')('cheese')('tomato');

console.log(mySammy); */

/*--------------------------------------------------------------------------------------------*/

/* const multiply = (a, b) => a * b;

const curriedMultiply = (a) => (b) => multiply(a, b);

console.log(curriedMultiply(4)(9));  */

/*----------------------------------DOM Manipuation---------------------------------------------*/

// Onclick Button Text Changes and Console Logs Button Clicked! using Curry function
/* const updateElemText = id => content => 
    document.querySelector(`#${id}`).
    textContent = content;
const button = document.getElementById('myButton');
const output = document.getElementById('output');
button.onclick = function () { 
    output.textContent = 'Button clicked!';
    console.log(output);
    const updateHeaderText = updateElemText('myButton');
    updateHeaderText('Button Clicked! Awesome');
}
console.log(button);
console.log(output); */
/*----------------------------------Functions-------------------------------------------------------*/

/* const addCustomer = fn => (...args) =>{
    console.log(`Saving Customer Info...`);
    return fn(...args);
}
const processOrder = fn => (...args) =>{
    console.log(`Processing Order # ${args[0]}`);
    return fn(...args);
}
let completeOrder = (...args) => {
    console.log(`Order # ${[...args].toString()} completed!`);
}
completeOrder = (processOrder(completeOrder));
console.log(completeOrder);
completeOrder = (addCustomer(completeOrder));
completeOrder("1000"); */

/*--------------------------------------------------------------------------------------------*/

/* const curry = (fn) => {
    return curried = (...args) => {
        console.log(fn.length);
        if (fn.length !== args.length) {
            return curried.bind(null, ...args);
        }
        return fn(...args);
    };
};

const total = (x, y, z) => x + y + z;

const curriedTotal = curry(total);

console.log(curriedTotal(10)(20)(30)); // 6 */

/*------------------------------ This Key Word-------------------------------------------------*/

// This Keyword

/* function talk() {
    return this;
}
const me = {
    name: "varun",
    talk,
}
 */

/* function talk() {
    return `I am ${this.name}`;
}
const me = {
    name: "varun",
    talk,
}
const you = {
    name: "Random Person",
    talk,
}

me.talk();
you.talk();  */
/*--------------------------------------------------------------------------------------------*/

// Binding and This and Call
/* function talk() {
    return `I am ${this.name}`;
}
const me = {
    name: "varun",
}
const meTalk= talk.bind(me);
console.log(talk.bind(me)()); // Outputs: "I am varun"
console.log(talk.call(me)); */
/*--------------------------------------------------------------------------------------------*/

// Single Parameter
/*function talk(lang) {
    if(lang==="en"){
    return `I am ${this.name}`;
    } else if(lang==="es"){
        return `Soy ${this.name}`;
    }
}
const me = {
    name: "varun",
}
const meTalk= talk.bind(me);
console.log(talk.bind(me)()); // Outputs: "I am varun" 
console.log(talk.call(me, "es"));*/

/*--------------------------------------------------------------------------------------------*/

// Multiple Parameter
/* function talk(lang, isPolite) {
    if(isPolite){
        if(lang==="en"){
            return `Hello Sir I am ${this.name}`;
            } else if(lang==="es"){
                return `hola amable señor Soy ${this.name}`;
        }
    } 
    if(!isPolite){
        if(lang==="en"){
            return `Oye, I am ${this.name}`;
            } else if(lang==="es"){
                return `Soy ${this.name} no me importa`;
            }
    }
}
const me = {
    name: "varun",
}
const meTalk = talk.bind(me);  // Reurns a New Function
console.log(meTalk("en", true)); // Does not return a new Fucntion Executes the Function There and Then with Passed Arguments
console.log(talk.call(me, "es", false));
console.log(talk.apply(me, ["en", false]));
 */

/* ------------------------------------------------------------ */

/* Constructor Functions and This Keyword */
/* function Person (n) {
    this.name = n;
    this.talk = function() {
        console.log(this);
    }
    console.log(this);
    setTimeout( function(){  // This is a callback function, inside this the this keyword does not refer to the same object in callback, Inside this fucntion's scope any this keyword would refer to the Window object, to solve this we use either a .bind(this) method to bind the callback function to this object or use an arrow function instead
console.log(this);
    }.bind(this), 100);
}
const me = new Person("Varun");
me.talk();

function Person (n) {
    this.name = n;
    this.talk = function() { 
        console.log(this);
    }
    console.log(this);
    setTimeout( ()=> {  // This is a callback function, inside this the this keyword does not refer to the same object in callback, Inside this fucntion's scope any this keyword would refer to the Window object, to solve this we use either a .bind(this) method to bind the callback function to this object or use an arrow function instead
console.log(this);
    }, 100);
}
const me = new Person("Varun");
me.talk(); */

/*--------------------------------------------------------------------------------------------*/

// Arrow Functions

/* const sayHello = function firstName() {
    console.log(arguments);
}
console.log(sayHello ("Varun", "Devloper", 35));

const sayHello = () =>{
    console.log(arguments);
}
console.log(sayHello ("Varun", "Devloper", 35)); */

// Callback Functions

/* setTimeout(function () {console.log("Hello")}, 1000);
setTimeout(() => {console.log("Hello")}, 1000);

function sayHello() {console.log("Hello");}
sayHello() => {console.log("Hello");} */

// Arrow Function Simpler to Read
/* const array = [1, 2, 3];
array.map(function (i) {return <div>i</div>});
array.map(i =><div>i</div>);
// Arrow Function as  Longer Expression Harder to Read
const elements = (data) =>
    data.map(i => {
        if (i===0) {
            return `<h1>&{i}</h1>`
        } else {
            return `<h2>&{i}</h2>`
        }
        }); */

/*--------------------------------------------------------------------------------------------*/

//Higher Order Functions and Arrow Functions
/*     const  filterd = [];
for (let i = 0; i<names.length; i++) {
    if(names[i][0] !== "Q"){
    filterd.push(names[i]);
    }
    }
const longNames = [];
for (let i = 0; i<filterd.length; i++) {
    if(filterd[i].length >=5 ) {
        longNames.push(filterd[i]);
    }
}
const elements = [];
for (let i = 0; i<longNames.length; i++) {
 const el= document.createElement("p");
 el.innerText = longNames[i];
 elements.push(el);
}
console.log(names, filterd, longNames, elements); */

/*--------------------------------------------------------------------------------------------*/

/* const names = ["Sina", "Sam", "Qoli", "Ben", "Zoe", "Quentin", "Ala", "Gabriel"];
const longNames = names.filter(name => name[0]!=="Q")
.filter(name => name.length >=5)
.map(n => {
    const el = document.createElement("p")
    el.innerText = n;
    return el
});
console.log(longNames); */

/*--------------------------------------------------------------------------------------------*/

/* const names = ["Samorai", "Hulkemania", "Sina", "Sam", "Qoli", "Ben", "Zoe", "Quentin", "Ala", "Gabriel"];
const longNames = names.filter(name => name[0]!=="Q")
.filter(name => name.length >=5)
.map(n => {
    const el = document.createElement("p")
    el.innerText = n;
    return el;
});
longNames.forEach(el => document.body.appendChild(el));
console.log(longNames);  */

/*--------------------------------------------------------------------------------------------*/

/* const names = ["Samorai", "Hulkemania", "Sina", "Sam", "Qoli", "Ben", "Zoe", "Quentin", "Ala", "Gabriel"];
const longNames = names.filter(name => name[0]!=="Q")
.filter(name => name.length >=5)
.map(n => {
    const el = document.createElement("p")
    el.innerText = n;
    return el;
});
longNames.forEach(el => console.log(el.innerText)); */

/* names.filter(name => name[0]!== "Q").map(name => name.length >= 5).forEach(name => console.log(name)); */

/* const input = document.getElementById('myInput');
        const output = document.getElementById('output');
      
        input.onchange = function() {
            output.innerHTML = `Value Changed to : ${event.value}`;
        }
 */

/*         
//let arr = ["delhi","america", "south antarctica", "usa","South america"];
//let arr = prompt("Enter some country name").split(",");
let arr = ["India", "South Americas", "Russia", "United Kingdom", "Japan", "Spain", "Greece", "Italy"];
function countryList(arr){
    let name =0;
    for(let i=0;i<arr.length;i++)
    {
        
        if(arr[name].length<arr[i].length){
            name=i;
        }
    }
    console.log(arr[name]);
}
countryList(arr); */

/*--------------------------------------------------------------------------------------------*/

/* let arr = prompt("Enter some country names (comma-separated)").split(",").map(country => country.trim());

console.log("Processed Array:", arr);  // Debugging step - Check the array after splitting

function countryList(arr) {
    if (arr.length === 0) {
        console.log("No input provided.");
        return;
    }
    let longestCountry = arr[0]; // Assume first country is longest
    let longestCountry2 = []; // Debug
    for (let i = 1; i < arr.length; i++) {  
        console.log(`Comparing ${arr[i]} (${arr[i].length}) with ${longestCountry} (${longestCountry.length})`);  // Debug

        if (arr[i].length > longestCountry.length) {  
            console.log(arr[i]);
            longestCountry2.unshift(arr[i]); 
            console.log(longestCountry2); // Update if a longer name is found
        } else if (arr[i].length == longestCountry.length) {
            console.log("Found a tie between", arr[i], "and", longestCountry);
            longestCountry2.unshift(arr[i]);   // Debug
            console.log(longestCountry2);
        }
    }
    console.log(`Longest country name: ${longestCountry2}`);
}
countryList(arr);


function countryList(arr) {
    if (arr.length === 0) {
        console.log("No input provided.");
        return;
    }

    let longestCountry = arr[0]; // Assume first country is longest
    let longestCountry2 = [longestCountry]; // Start with the first country

    for (let i = 1; i < arr.length; i++) {
        console.log(`Comparing ${arr[i]} (${arr[i].length}) with ${longestCountry} (${longestCountry.length})`);  // Debug

        if (arr[i].length > longestCountry.length) {
            longestCountry = arr[i]; // Update the longest country
            longestCountry2 = [arr[i]]; // Clear and add the new longest country
            console.log(`New longest country found: ${arr[i]}`);
        } else if (arr[i].length === longestCountry.length) {
            console.log("Found a tie between", arr[i], "and", longestCountry);
            longestCountry2.push(arr[i]); // Add to the list of longest countries
        }
    }

    console.log(`Longest country name(s): ${longestCountry2.join(', ')}`);
}

countryList(arr); */

/* let arr1= ["India", "South Americas", "Russia", "United Kingdom", "Japan", "Spain", "Greece", "Italy"];
let arr2 = [];
arr2.unshift(arr1[3]);
console.log(arr2[0]); */

/*--------------------------------------------------------------------------------------------*/

// Accessing Vaue of Object nested inside and Array

/* let arr= [ 
    {
    name: "Sidhu",
    age: 35,
    Nationality: "Indian",
    },
    {
    name: "Raman",
    age: 47,
    Nationality: "Srilankan",
    },
    {
    name: "yoshi",
    age: 23,
    Nationality: "Japanese",
    
    },
    ];
        arr.forEach(function (obj)  {
    for (let key in obj) {
        console.log(key, obj[key]);
    }
    }); */
/*--------------------------------------------------------------------------------------------*/
