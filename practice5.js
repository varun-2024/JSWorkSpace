/* // Math Methods

console.log(Math.PI); // 3.141592653589793
console.log(Math.SQRT2);
console.log(Math.E); // 2.718281828459045
console.log(Math.abs(-986)); // 2.7182818284590
console.log(Math.pow(2, 7)); // 2.7182818284590
console.log(Math.floor(5.9874)); // 2.718281828459045
console.log(Math.ceil(5.9874)); // 
console.log(Math.floor(Math.random() * 10 + 1)); // Random number between 0 and 100 */


// Closures Example
/* 
function outerFunction() 
{
    const outerVar = "I am from outer function";
    function innerFucntion() 
        {
        console.log(outerVar);
        }
    return innerFucntion;
}
const closure = outerFunction();
closure();// I am from outer function */


/* function outerFunction(outerVariable){
    return function innerFunction(innerVariable){
        console.log("Outer Variable : ", outerVariable);
        console.log("Inner Variable : ", innerVariable);
        return 0;
    }
}
const newFunction = outerFunction("Outside");
console.log(newFunction("Inside"));
console.log(newFunction());
console.log(outerFunction("outside")); */