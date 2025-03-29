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
//Closures
/* function counter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

counter()();
let recall = counter();
recall();
recall(); */
/* -------------------------------------------------------- */

/* console.log("Hello World");
console.warn("Hello World");
console.error("Hello World");
console.info("Hello World");
console.table({ name: "Varun", age: 38, city: "London" }); */
/* -------------------------------------------------------- */

/* let a = 10;
let b = 20;
let c;
c = a;
a = b;
b = c;
[a, b] = [b, a];
a= a+b;
b= a-b;
a= a-b;
console.log(a, b); 
let a = 10;
let b = 20;
a = a + b;
b = a - b;
a = a - b;
console.log(a, b);
*/

/* -------------------------------------------------------- */
//Console Log Group
/* console.groupCollapsed("Food Items");
console.log("Pizza");
console.groupCollapsed("Beverages");
console.log("Coke");
console.log("Pepsi");
console.log("Miranda");
console.groupEnd();
console.log("Burger");
console.log("Fish and Chips");
console.groupEnd(); */
/* -------------------------------------------------------- */

//Object Freeze
/* obj = {
  name: "John",
  age: 30,
  city: "New York",
};
Object.freeze(obj);
console.log(obj);
obj.name = "Varun";
console.log(obj); */
/* -------------------------------------------------------- */
// String to Number
/* str = "151";
console.log(parseInt(str));
console.log(parseFloat(str));
console.log(Number(str));
console.log(+str); */

// Includes
/* let str = "Hello World";
console.log(str.includes("World"));
str.indexOf("World") !== -1 ? console.log(true) : console.log(false);
str.search("World") !== -1 ? console.log(true) : console.log(false); */

/* -------------------------------------------------------- */
//Reduce Method
/* arr = [1, 2, 3, 4, 5];
let sum = arr.reduce((acc, val) => {
  //console.log(acc, val);
  return acc + val;
}, 0);

console.log(sum); */
/* -------------------------------------------------------- */
/* let str = "JavaScript";
for (i of str) {
  console.log([...i]);
} */

/* -------------------------------------------------------- */
// Remove Dyplication and find unique numbers
/* let arr = [1, 1, 2, 2, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8, 8, 9, 9, 10];
let arr2 = [...new Set(arr)];
console.log(arr2); */
/* -------------------------------------------------------- */
//Reduce Method for largest number
/* let arr = [1, 2, 5, 3, 8, 5, 0, 6, 8, 45, 67, 344, 4, 835, 88, 434, 1001];
let largest = arr.reduce((acc, val) => {
  if (acc > val) {
    return acc;
  } else {
    return val;
  }
}, 0);

console.log(largest); */

/* let arr = [3, 1, 5, 2, 4, 1, 2, 5, 3, 4];
let unique = arr.filter((val, idx, array) => {
  return array.indexOf(val) === idx;
});
console.log(unique); */
/* -------------------------------------------------------- */
// Second Largest Number
/* let arr = [15, 2, 1, 3, 2, 13, 4, 5, 6, 7, 8, 9, 1, 2, 3];
let uniquearr = [...new Set(arr)];
console.log(uniquearr);
let sortedarr = uniquearr.sort((a, b) => b - a);
console.log(sortedarr[1]); */

//Second Largest Number
/* let arr = [15, 2, 1, 3, 2, 13, 4, 5, 6, 7, 8, 9, 1, 525, 600, 2, 3];
console.log([...new Set(arr)].sort((a, b) => b - a)[1]); */

/* -------------------------------------------------------- */
//Array Reverse
/* let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr2 = arr.reverse();
console.log(arr2); */

/* arr = [5, 6, 7, 8, 9, 1, 2, 3];
arr2 = [];
console.log(arr);
for (let i = arr.length - 1; i >= 0; i--) {
  arr2.push(arr[i]);
}
console.log(arr2); */
/* -------------------------------------------------------- */
// Number of Times a value is repeated and Most Repeated Value in an Array
/* let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10];
let obj = {};
let max = 0;
let val = 0;
arr.forEach((val) => {
  //console.log(obj[val]);
  obj[val] === undefined ? (obj[val] = 1) : obj[val]++;
});
console.log(obj);

for (let i in obj) {
  console.log(`Value ${i} is repeated ${obj[i]} times`);
  if (obj[i] > max) {
    max = obj[i];
    val = i;
  }
}
console.log(`${val} was the most repeated value that repeated ${max} times`); */

/* -------------------------------------------------------- */
//Sorting  with .sort() Method
/* console.log([5, 10, 1, 25].sort());
console.log([5, 10, 1, 25].sort((a, b) => a - b)); */

/* -------------------------------------------------------- */
// Merging Two Objects and Returning in one Object
/* function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

let obj1 = { name: "John", age: 30 };

let obj2 = { city: "New York", job: "Developer" };

console.log(mergeObjects(obj1, obj2)); */

/* -------------------------------------------------------- */

//Post increment and Pre Increment and Decrement
/* let a = 5;
let b = a--;
console.log(a, b); */

// Turning True into number by Pre or Post increment
/* let a = true;
a++;
console.log(a); */

/* -------------------------------------------------------- */
// Compound Interest
/* let p = 1000;
let r = 5;
let t = 3;
console.log(p * Math.pow(1 + r / 100, t) - p); */

/* -------------------------------------------------------- */

//Hero's Formula
/* let a = 3;
let b = 4;
let c = 5;

if (a + b <= c || b + c <= a || a + c <= b) {
  console.log("Triangle is not possible");
} else {
  let s = (a + b + c) / 2;
  let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  console.log(area);
} */
/* -------------------------------------------------------- */
// Disscount Calcuation
/* function calculateFinalAmount(amount) {
  // Write your logic here
  let dis = 0;
  if (amount > 9000) {
    dis = 20;
  } else if (amount >= 7001 && amount <= 9000) {
    dis = 10;
  } else if (amount >= 5001 && amount <= 7000) {
    dis = 5;
  } else dis = 0;

  return (amount = amount - (amount * dis) / 100);
}

console.log(calculateFinalAmount(4000)); // Output: 8000 */

/* -------------------------------------------------------- */
// Electricity Bill Calculation

/* function calculateElectricityBill(unit) {
  // Write your logic here
  if (unit > 400) {
    return (100 * 4.2 + 100 * 6 + 200 * 8 + (unit - 400) * 13).toFixed(1);
  } else if (unit >= 201 && unit <= 400) {
    return (100 * 4.2 + 100 * 6 + (unit - 200) * 8).toFixed(1);
  } else if (unit >= 101 && unit <= 200) {
    return (100 * 4.2 + (unit - 100) * 6).toFixed(1);
  } else return (unit * 4.2).toFixed(1);
} */

/* function calculateElectricityBill(unit) {
  let payableAmount = 0;

  // Units above 400 cost 13 per unit
  if (unit > 400) {
    payableAmount += (unit - 400) * 13;
    unit = 400;
  }
  // Units between 201-400 cost 8 per unit
  if (unit > 200) {
    payableAmount += (unit - 200) * 8;
    unit = 200;
  }
  // Units between 101-200 cost 6 per unit
  if (unit > 100) {
    payableAmount += (unit - 100) * 6;
    unit = 100;
  }
  // Units 0-100 cost 4.2 per unit
  payableAmount += unit * 4.2;
  return payableAmount.toFixed(1);
}
console.log(calculateElectricityBill(300)); */

/* function calcbill(units) {
  let amount = 0;
  if (units > 400) {
    amount += (units - 400) * 13;
    units = 400;
  }
  if (units > 200) {
    amount += (units - 200) * 8;
    units = 200;
  }
  if (units > 100) {
    amount += (units - 100) * 6;
    units = 100;
  }
  amount += units * 4.2;
  return amount.toFixed(1);
}

console.log(calcbill(300));
 */
/* -------------------------------------------------------- */
// Saving Data to DB with Callbacks
/* function savetoDB(data, sucess, failure) {
  let internetSpeed = Math.floor(Math.random() * 10) + 1;

  if (internetSpeed > 5) {
    console.log(data);
    sucess();
  } else {
    failure();
  }
}

savetoDB(
  "Charlie Chaplin",
  () => {
    console.log("Data saved successfully");
    savetoDB(
      "Password Data 2",
      () => {
        console.log("Data 2 Save Sucessfully");
        savetoDB(
          "Data 3 ",
          () => {
            console.log("Data 3 Save Sucessfully");
          },
          () => {
            console.log("Failed to save data 3");
          }
        );
      },
      () => {
        console.log("Failed to save data 2");
      }
    );
  },
  () => {
    console.log("Failed to save data");
  }
); */
/* -------------------------------------------------------- */
// Saving Data to DB with Promises
/* function savetoDB(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 5) {
      resolve("Data Saved was " + data);
    } else {
      reject("Failed to save d    ata");
    }
  });
}

savetoDB("Charlie Chaplin")
  .then((result) => {
    console.log("Data 1 saved successfully");
    console.log(result);
    return savetoDB("Data 2");
  })
  .then((result) => {
    console.log("Data 2 saved successfully");
    console.log(result);
    return savetoDB("Data 3");
  })
  .then((result) => {
    console.log("Data 3 saved successfully");
    console.log(result);
  })
  .catch((error) => {
    console.log("Failed to save data");
    console.log(error);
  }); */

/* -------------------------------------------------------- */
// Saving Data to DB with Async Await
/* async function greet() {
  throw "404 Page not found";
  return "Hello";
}
greet()
  .then((result) => {
    console.log("Promise Sucessful");
    console.log(`Result was ${result}`);
  })
  .catch((error) => {
    console.log("Error Occured", error);
  }); */
/* -------------------------------------------------------- */
// Await Keyword
/* function getNum() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10) + 1;
      console.log(num);
      resolve();
    }, 2000);
  });
}

async function demo() {
  await getNum();
  await getNum();
  await getNum();
}
demo();
 */
/* -------------------------------------------------------- */
// Example 1: Fetching data with async/await

/* async function fetchData(url) {
  try {
    console.log(`Fetching data from ${url}...`);
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Data fetched successfully:", data);
    return data; // Return the fetched data
  } catch (error) {
    console.error("Error fetching data:", error);
    return null; // Return null or handle the error appropriately
  }
}

async function main() {
  const apiUrl = "https://jsonplaceholder.typicode.com/todos/1"; // Example API

  const fetchedData = await fetchData(apiUrl);

  if (fetchedData) {
    console.log("Main function received data:", fetchedData);
    // You can perform further operations with the fetched data here
  } else {
    console.log("Main function: Data fetching failed.");
  }

  console.log("Main function completed.");
}

main(); */

// Example 2: Simulating asynchronous operations with setTimeout

/* function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function processTasks() {
  console.log("Task 1 started...");
  await delay(1000); // Simulate a 1-second delay
  console.log("Task 1 completed.");

  console.log("Task 2 started...");
  await delay(1500); // Simulate a 1.5-second delay
  console.log("Task 2 completed.");

  console.log("Task 3 started...");
  await delay(500); // Simulate a 0.5-second delay
  console.log("Task 3 completed.");

  console.log("All tasks completed.");
}

processTasks(); */

// Example 3: Multiple promises using Promise.all()

/* async function fetchMultiple(urls) {
  try {
    const promises = urls.map((url) =>
      fetch(url).then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
    );

    const results = await Promise.all(promises);
    console.log("All data fetched", results);
    return results;
  } catch (error) {
    console.error("Error fetching multiple:", error);
    return null;
  }
}

async function multiMain() {
  const urls = [
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/todos/2",
    "https://jsonplaceholder.typicode.com/todos/3",
  ];

  await fetchMultiple(urls);
}
multiMain(); */

/* -------------------------------------------------------- */
