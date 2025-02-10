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
  }, arr);
  console.log(properCase(2, ["sachin", "raghav", "vipul", "dinesh", "chirag"])); */


