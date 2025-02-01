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

/* class Parent {
    hello() {
        console.log("Hello");
}
}

class Child extends Parent {

}

let Obj = new Child(); */

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


class Person {
    constructor(name) {
        console.log("Enter Parent Constructor");
        this.species = "Homo Sapeins";
        this.name = name;
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
        super(); // To invoke Parent Class Constructor
        this.branch = branch;
        console.log("Exit Child Constructor Engineer");
    }
    work() {
        console.log("Solve problems and Build Something");
    }
}
class Doctor extends Person {
    constructor(name, specialisation) {
        console.log("Enter Child Constructor Doctor");
        super(); // To invoke Parent Class Constructor
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
jane.work();
