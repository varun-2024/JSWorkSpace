/*--------------------------------Objects and Classes-----------------------------------------*/
/*--------------------------------------------------------------------------------------------*/
/* //Classes and Objects
//Prototypes

class ToyotaCar {
    
    constructor(carBrand, milage) {
        console.log("Creating New Object");
        this.CarBrand = carBrand;
        this.Milage = milage;

    }
    
    start () {
        console.log("Start");
    }

    stop () {
        console.log("Stop");
    }

    setBrand(brand) {
        this.carMake= brand;
    }
    carAge(age) {
        this.vehicleAge = age;
    }
}

let fortuner = new ToyotaCar("Fortuner 4 x 4", 23468);
fortuner.setBrand("Fortuner");
fortuner.carAge(10);
console.log(fortuner);
let lexus = new ToyotaCar(null, 45890);
lexus.setBrand("Lexus");
lexus.carAge(5);
console.log(lexus);
lexus.CarBrand = "Lexus 4 x 4";
console.log(fortuner);
console.log(lexus);
 */

// Inheritance
/*--------------------------------------------------------------------------------------------*/

/* class Parent {
    hello() {
        console.log("Hello");
}
}

class Child extends Parent {

}

let Obj = new Child(); */

/*--------------------------------------------------------------------------------------------*/

// Inheritance

/* class Person {
    constructor() {
        this.species = "Homo Sapeins";
    }
    
    eat() {
        console.log("Eat");
    }
    sleep() {
        console.log("Sleep");
    }
    work() {
        console.log("Do Nothing");
    }
}

class Engineer extends Person {
    work() {
        console.log("Solve problems and Build Something");
    }
}

class Doctor extends Person {
    work() {
    console.log("Treat Patients");
    }
}

let john = new Engineer();
let jane = new Doctor();

console.log(john);
john.work();
console.log(jane);
jane.work(); */

/*----------------------------------Inheritance--------------------------------------------------*/

// Inheritance, Super Keyword and Super with Arguments

/* class Person {
  constructor(name) {
    console.log("Enter Parent Constructor");
    this.species = "Homo Sapeins";
    this.name = name;
    console.log(this.name);
    console.log("Exit Parent Constructor");
  }
  eat() {
    console.log("Eat");
  }
  sleep() {
    console.log("Sleep");
  }
  work() {
    console.log("Do Nothing");
  }
}
class Engineer extends Person {
  constructor(name, branch) {
    console.log("Enter Child Constructor Engineer");
    super(name); // To invoke Parent Class Constructor
    this.branch = branch;
    console.log(this.branch);
    super.work(); // Calling Work fuction in Parent Class
    this.work(); // Calling Work function in Child Class
    console.log("Exit Child Constructor Engineer");
  }
  work() {
    console.log("Solve problems and Build Something");
  }
}
class Doctor extends Person {
  constructor(name, specialisation) {
    console.log("Enter Child Constructor Doctor");
    super(name); // To invoke Parent Class Constructor
    this.specialisation = specialisation;
    console.log("Exit Child Constructor Doctor");
  }
  work() {
    console.log("Treat Patients");
  }
}
let john = new Engineer("John", "Chemical");
let jane = new Doctor("jane", "Cardiologist");
console.log(john);
john.work();
console.log(jane);
jane.work(); */

/*--------------------------------------------------------------------------------------------*/

// Try Catch
/* let a = 5;
let b = 10;
console.log("a = ", a);
console.log("b = ", b);
try {console.log("a + b = ", a + c); //Error 
} catch(err) {
console.log(err); //error
} 
console.log("a + b = ", a + b);
console.log("a + b = ", a + b); */

/*--------------------------------------------------------------------------------------------*/

// Asycronous - Timeout Function

/* function hello() {
    console.log("Hello");
} */

/* console.log("first comment");
setTimeout(() => { console.log("Hello")}, 2000);
console.log("Second comment"); */

/*--------------------------------------------------------------------------------------------*/

// Callbacks

/* function sum (a, b) {   console.log(a + b);  }
function calculator (a, b, sumCallback) {  sumCallback(a,b);  }
calculator (1,2, sum);
calculator (1,2, (a,b) => { console.log(a+b)}); */

//Callback Hell

/* function getData(dataId, getNextData){
    setTimeout(()=> {
        console.log("data ",dataId);
        if (getNextData) {
            getNextData();
        } else{ console.log("Out of Data")}
    }, 2000);
}
console.log("Getting data 1");
getData(1, () => { 
    console.log("Getting data 2");
    getData(2, () => {
        console.log("Getting data 3");
        getData(3, () => {
            console.log("Getting data 4");
            getData(4);
        });
    })
});
 */
/*--------------------------------------------------------------------------------------------*/
// Promises
/* let promise = new Promise((resolve, reject) => {
    console.log("I am a Promise");
    //resolve("Success");
    reject("Some Error Occured");
}) */

/* function getData(dataId, getNextData){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
        console.log("data ", dataId);
        resolve("Sucess");
        if (getNextData) {
            getNextData();
        }
    }, 5000);
});
}
 */

/* const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I am a Promise");
        resolve("Success");
        //reject("Some Error Occured");
    })
}
let promise = getPromise();
promise.then((res) => {
    console.log("Promise Resolved", res);
});
promise.catch((err) =>{
    console.log("Promise Failed", err);
}); */

/*--------------------------------------------------------------------------------------------*/
// Promise Chains

/* function asyncFunc() {
    return new Promise((resolve, reject) => {
setTimeout (() => {
console.log("Some Data 1");
resolve("Sucess");
}, 3000);
    });
}
function asyncFunc2() {
    return new Promise((resolve, reject) => {
setTimeout (() => {
console.log("Some Data 2");
resolve("Sucess");
}, 3000);
    });
}
// Way 1 to write this code
console.log("Fetching Data 1");
let p1= asyncFunc();
p1.then((res) => {
    console.log(res);
    console.log("Fetching Data 2");
    let p2= asyncFunc2();
    p2.then((res) => {
    console.log(res);
});
});
// Way 2 to write above code
console.log("Fetching Data 1");
asyncFunc().then((res) => {
    console.log(res);
    console.log("Fetching Data 2");
    asyncFunc2().then((res) => {
    console.log(res);
});
}); */

/*--------------------------------------------------------------------------------------------*/

/*     // Solving Callback Hell with Promise Chaining
function getData(dataId){
    return new Promise((resolve, reject) =>{
        setTimeout(()=> {
            console.log("data ",dataId);
            resolve ("Sucess");
        }, 3000);
    });
}
getData(1).then((res) => {
    console.log(res);
    getData(2).then(() => {
        console.log(res);
        getData(3).then(() => {
            console.log(res);
        })
    })
}); */
/*--------------------------------------------------------------------------------------------*/

/*     // Another Way of Writing Above Code Solving Callback Hell with Promise Chaining
function getData(dataId){
    return new Promise((resolve, reject) =>{
        setTimeout(()=> {
            console.log("data ",dataId);
            resolve ("Sucess");
        }, 3000);
    });
}
getData(1)
    .then((res) => {
    console.log("Sucess");
    return getData(2);
    })
    .then((res) => {
    console.log("Sucess");
    return getData(3);
    })
    .then((res) => {
    console.log(res);
    }); */

// Async Await
/* async function hello() {
    console.log("Hello");
} */

/* function api() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log("Weather Data");
        resolve (200);
        }, 2000);        
    })
}
async function getWeatherData(){
    await api();
    await api();
    await api();
} */
/*--------------------------------------------------------------------------------------------*/
// Answer to Callback Hell

/* function getData(dataId){
    return new Promise((resolve, reject) =>{
        setTimeout(()=> {
            console.log("data ",dataId);
            resolve ("Sucess");
            }, 2000);
        });
    }
 
            // Async-Await
       async function getAllData() {
    console.log("Getting Data 1...");
    await getData(1);
    console.log("Getting Data 2...");
    await getData(2);
    console.log("Getting Data 3...");
    await getData(3);
    console.log("Getting Data 4...");
    await getData(4);
}
getAllData(); */

// Then & Catch Promoises
/* getData(1)
    .then((res) => {
    console.log("Sucess");
    console.log(res)
    return getData(2);
    })
    .then((res) => {
    console.log("Sucess");
    return getData(3);
    })
    .then((res) => {
    console.log(res);    
    })
    .then((res) => {
    return getData(4);
    }).then(() =>{
    console.log("Sucess");
    }); */
/*--------------------------------------------------------------------------------------------*/
// Promise Chaining
/* getData(1).then((res) => {
        console.log(res);
        getData(2).then(() => {
            console.log(res);
            getData(3).then(() => {
                console.log(res);
            })
        })
    }); */
/*--------------------------------------------------------------------------------------------*/
//Callback Hell

/* function getData(dataId, getNextData){
    setTimeout(()=> {
        console.log("data ",dataId);
        if (getNextData) {
            getNextData();
        } else{ console.log("Out of Data")}
    }, 2000);
}
console.log("Getting data 1");
getData(1, () => { 
    console.log("Getting data 2");
    getData(2, () => {
        console.log("Getting data 3");
        getData(3, () => {
            console.log("Getting data 4");
            getData(4);
        });
    })
});
 */
/*--------------------------------------------------------------------------------------------*/
/* // IIFE Function

function getData(dataId){
    return new Promise((resolve, reject) =>{
        setTimeout(()=> {
            console.log("data ",dataId);
            resolve ("Sucess");
            }, 2000);
        });
    }
(async function () {
console.log("Getting Data 1...");
await getData(1);
console.log("Getting Data 2...");
await getData(2);
console.log("Getting Data 3...");
await getData(3);
console.log("Getting Data 4...");
await getData(4);
})();
 */
/*--------------------------------------------------------------------------------------------*/
/*         // Fetch API
const URL = "https://dogapi.dog/api/v2/breeds";
const fact = document.querySelector("#fact");
const desc = document.querySelector("#desc");
const btn = document.querySelector("#btn");
// Using Async-Await
const getBreeds = async () => {
    console.log("Getting Data....")
    let response = await fetch(URL);
    console.log(response);
    console.log(response.status);
    let data = await response.json();
    console.log(data);
    console.log(data.data[0].attributes.name, data.data[0].attributes.description);
    fact.innerText = data.data[0].attributes.name;
    desc.innerText = data.data[0].attributes.description;
}
// Using Promise Chains
function getBreeds() {
fetch(URL)
.then((response) =>{
    console.log(response);
    return response.json();
})
.then((data)=> {
    console.log(data);
    console.log(data.data[0].attributes.name);
    console.log(data.data[0].attributes.description);
    fact.innerText = data.data[0].attributes.name;
    desc.innerText = data.data[0].attributes.description;
});
}
btn.addEventListener("click", getBreeds); */
/*--------------------------------------------------------------------------------------------*/

/* let arr = [1, 2, 3];
arr.sayHello = () => {
  console.log("Hello");
};
arr.push(4);

console.log(arr); */
/*---------------------------------Factory Functions--------------------------------------------*/
//Factory Function (Creates copy of function for each object, takes more memory because creates copy for each object and is inneficient)
/* function PersonMaker(name, age) {
  const person = {
    name,
    age,
    talk() {
      console.log(
        `Hello, my name is ${this.name} and I am ${this.age} years old.`
      );
    },
  };
  return person;
}

let p1 = PersonMaker("Sam", 23);
let p2 = PersonMaker("Eva", 33);
console.log(p1);
p1.talk();
p2.talk(); */
/*-------------------------------------New Keyword--------------------------------------------*/
// Constructor Function - Dosen't return anything and start with Capital Letter
/* function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.talk = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};
let p1 = new Person("Sam", 23);
let p2 = new Person("Eva", 33);

p1.talk();
p2.talk();
console.log(p1, p2); */
/*---------------------------------------Classes------------------------------------------------*/
/* class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  talk() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

let p1 = new Person("Sam", 23);
let p2 = new Person("Eva", 33);

p1.talk();
p2.talk();

console.log(p1, p2); */

/*----------------------------------Inheritence--------------------------------------------------*/

/* class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  talk() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

let p1 = new Person("Yam", 13);

p1.talk();
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }
  talk() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old. I am in grade ${this.grade}.`
    );
  }
}

let s1 = new Student("Sam", 23, "9th");

s1.talk();

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }
  talk() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old. I teach ${this.subject}.`
    );
  }
}

let t1 = new Teacher("John", 45, "Math");

t1.talk();
 */
/*--------------------------------------------------------------------------------------------*/

/*--------------------------------------------------------------------------------------------*/

/*--------------------------------------------------------------------------------------------*/
