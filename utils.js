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




    // Proper Case Function
/* const properCase = (string) => {
    return string.split(' ')
        .map(word => `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`)
        .join(' ');
};

console.log(properCase("random shit")); */


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

/* const multiply = (a, b) => a * b;

const curriedMultiply = (a) => (b) => multiply(a, b);

console.log(curriedMultiply(4)(9));  */

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


const addCustomer = fn => (...args) =>{
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
completeOrder("1000");