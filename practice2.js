/* JAVA SCRIPT FUCTIONS AND PRACTICE */

//Object
/* let markStudents = {
    stud1: 66,
    stud2: 54,
    stud3: 78,
    stud4: 39,
    stud5: 89,
} */

//Array

/* let markStudent= ["Ironman", "Thor", "Hulk","Shaktiman", "Spiderman", "Antman"];
console.log(markStudent);
console.log("Number of Student is: ", markStudent.length);
console.log(typeof markStudent); */

/* markStudent[1]=44;
console.log(markStudent); */

/* for(let i=0; i<markStudent.length; i++)
    {
    console.log(markStudent[i]);
    }
 */
// For Of Loop
/* 
for(let i of markStudent){
    console.log(i);
} */

/* let cities = ["Delhi", "Mumbai", "Bangalore", "Pune", "Chennai", "Kolkata", "Nagpur", "Hydrabad"];
    let stu ={
        stuNam: "Varun",
        stuOcc: "Student",
        stuAge: 38,
        stuLoc: "London",
    }
    for(let i of cities){
        console.log(i.toUpperCase());
    }

    console.log(stu["stuNam"], stu["stuAge"],"\n", stu.stuLoc);
    stu["stuAge"]+=1;
    stu["stuLoc"]= "Cardiff";
    console.log(stu["stuNam"], stu["stuAge"],"\n", stu.stuLoc);
    console.log(cities[3]);
    console.log(Object.values(stu));
    console.log(Object.entries(stu));
       
     */

/* let a= 123 + 123;

console.log(typeof(a));
console.log(a);
 */

/*
console.log(name);
var name="varun"; */

/* let god = "Hi";

let i=1;


do{
    god == true ? console.log(" God is True") : console.log(" God is False")

    i++;
    
    if(i%2==0){
        god=false;
    } else { god= true}

} while (i<=5);
 */
/* 
let str = "ChampionofChampions";
let size=0;

for (let i of  str){
console.log(i);
size++;
}

console.log(size);
 */

/* let student = {
    name: "Sharukh",
    age: 60,
    city: "Mumbai",
    isPass: true,
    cgpa: 9.15,

}

for(let i in student){
    console.log(i, student[i]);
} */

/* let str= "Shahrukh Khan";
for (let i=0; i<str.length; i++){
    console.log(`This is Charater at position ${i} : ${str[i]}`);
} */

/*     let a= 5;
    let b=3;
    let c=`a + b = ${a+b}`;
    let d= a+b;
    let obj = {
        sum: 10,
    };
    console.log(c);
    console.log(a, b, c, d, obj.sum); */

/* let str= "hotter totter";
    console.log(str.length);
    console.log(str.replaceAll("t", "p"));
    console.log(str.charAt(5));
    console.log(str.slice(7, 13)); */

/* let marks = [];
let value = 0;
for(let i=0; i<5; i++){
value= prompt("Please Enter Marks?");
marks[i]=value;
console.log(marks[i]);
}
 */

/* let a= "Immutable";
console.log(a);

a = "Executable";

console.log(a);
a="123"
console.log(a.length, a); */

/* let item=[250, 645, 300, 900, 50];

for(let i=0; i<item.length; i++){
item[i]= item[i]-item[i]/10;
console.log(item[i]);
}

item.push(650);
console.log(item);
let deleted= item.pop();
console.log(item, deleted); */

/* console.log("Hello"); */

/* function foo(){
    console.log("hello");
}

const result= foo();
console.log(result); */

/* let arr=[1, 2, 3, 4, 5];
let total= 0;
for(let i=0; i<arr.length; i++){
    total+=arr[i];
}
console.log(total); */

/* let arr=[1, 2, 3, 4, 5];                  // Faulty Code
for(let i=0; i<arr.length-1; i++){
    arr[i]+=arr[i+1];
}
console.log(arr); */

// ARROW FUNCTIONS

/* let calcResult = (a, b) => {
    return a*b;
}

console.log(calcResult(9, 5));

calcResult= 10;

console.log(calcResult); */

//Count Vowels Normal and Arrow Function

/* function countVowels(str){
    let count = 0;
    for(const char of str){
        if( char==="a" || char==="A" ||
            char==="e" || char==="E" ||
            char==="i" || char==="I" ||
            char==="o" || char==="O" ||
            char==="u" || char==="U"
        ){
            count++;
        }
    
    }
    return count;
}

console.log(countVowels("CHARLIE CHAPLIN"));

let countVow =(str) =>{
    let count = 0;
    for(const char of str){
        if( char==="a" || char==="A" ||
            char==="e" || char==="E" ||
            char==="i" || char==="I" ||
            char==="o" || char==="O" ||
            char==="u" || char==="U"
        ){
            count++;
        }
    
    }
    return count;
}

console.log(countVow("CHARLIE CHAPLIN")); */

//For EACH loop Method

/* let arr=["Pune", "Delhi", "Mumbai", "Lucknow"];

arr.forEach((val, idx, arr) => {console.log(val.toUpperCase(), idx, arr)}); */

// Calculate Square using For Each Arrow Function First Method

/* 
let arr = [2, 4, 6, 8, 10, 12];
arr.forEach((val) =>{ 
    console.log(val**2);
}); */

// Calculate Square using For Each Arrow Function Second Method

/* let arr = [2, 4, 6, 8, 10, 12];
let i =0;
i=prompt("Enter index Value=");
let result=0;
let calSquare = (val, idx, array) =>{
    return (`Square of ${val} is = ${val**2}` , ` at Index position ${idx}`, array);
}
result = arr.forEach(calSquare, i, arr);
console.log(result); */

// Working but stops working if i write calSquare()
/* arr.forEach(calSquare(val, idx, array)); */ // Not Working

/* let arr = [2, 4, 6, 8, 10, 12];
let i = prompt("Enter index Value=");

let calSquare = (val, idx, array) => {
    console.log(`Square of ${val} is = ${val ** 2}` , `at Index position ${idx}`, array);
}

// Call for the specific index i
calSquare(arr[i], i, arr); */

//Map Method appies

/* let arr = [1, 2, 3, 4, 5];
let newArr = arr.map ( (val)=> {
console.log(val*2);
}); */

//Filter Method  Filtern and Returns new array with values against applied condition

/* let arr = [1, 2, 3, 4, 5, 6, 7];
let newArr = arr.filter ( ( val )  => {
return val % 2 == 0;
});
console.log(newArr); */

/* let arr = [91, 82, 53, 94, 65, 76, 97];
let newArr = arr.filter ( ( val )  => {
return val > 90;
});
console.log(newArr);
 */

// Reduce Method  Reduced answer to one result
/* let arr = [1, 2, 3, 4, 5, 6, 7];  // Finding Largest Number
const result = arr.reduce ( (previous, current) => {
return previous < current ? previous : current
});
console.log(result); */

/* -------------------------------------------------------- */
/* document.querySelectorAll('div').forEach(div => console.log(div.getAttribute('class'))); */

/* let div = document.querySelectorAll('div');
div.forEach((i) => console.log(i.getAttribute('class'))); */

/* -------------------------------------------------------- */

//Spread Operator
/* let arr = [1, 2, 3, 4, 5];
console.log(...arr);
let arr2 = [6, 7, 8, 9];
console.log(...arr2);
let newArr = [...arr, ...arr2];
console.log(...newArr);
 */

//Spread and Rest Operator
/* let sum = (...args) => {
  let total = 0;
  for (let i of args) {
    total += i;
  }
  return total;
};
arr = [1, 2, 3, 4, 5];
console.log(sum(...arr)); */

//Arguments(Default Object) in Functions

/* function min(a, b, c, d) {
  console.log(arguments);
}
min(6, 9, 3, 1); */
//Reduce can not be applied on Arguments hence we use Rest operator with ...args instead of Arguments
/* function sum2(...args) {
  return args.reduce((acc, val) => acc + val);
}
console.log(sum2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

function sum(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(`You gave us : ${args[i]} as argument`);
  }
}
 */
/* -------------------------------------------------------- */

//Hoisting

/* const greet = function () {
  console.log("Hello");
};

function greet() {
  console.log("Hi");
}
greet(); */
/* -------------------------------------------------------- */

/* let greet = function () {
  console.log("Hello");
};

greet();
function greet() {
  console.log("Hi");
}
greet(); */
/* -------------------------------------------------------- */

/* var greet = function () {
  console.log("Hello");
};
greet();

function greet() {
  console.log("Hi");
}
greet(); */
/* -------------------------------------------------------- */

/* function greet() {
  console.log("Hi");
}

greet();

var greet = function () {
  console.log("Hello");
};
greet(); */
/* -------------------------------------------------------- */

/* function greet() {
  console.log("Hi");
}

greet();

var greet = function () {
  console.log("Hello");
}; */
/* -------------------------------------------------------- */

// Closure
/* function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();
console.log(counter);
counter();
counter(); */
/* -------------------------------------------------------- */
// Creating what Map Method does
/* let arr = [1, 2, 3, 4, 5];
function vmap(arr, fn) {
  newarr = [];
  for (let i = 0; i < arr.length; i++) {
    newarr.push(fn(arr[i]));
  }
  return newarr;
}

let newresult = vmap(arr, (val) => {
  return val * 2;
});
console.log(newresult);
 */
/* -------------------------------------------------------- */

//Destructuring
