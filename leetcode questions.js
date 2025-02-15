//let nums = [1, 7, 4, 8, 9, 3, 10, 15, 2, 11];
/* let nums = [3, 9, 1, 4, 2, 6, 5, 16, 8, 7];
let target = 10;


for (let i = 0; i < nums.length; i++) 
    {
    for (let j=nums.length - 1; j >= 0; j--) 
        {
        if (nums[i] + nums[j] === target && i!==j) {
            console.log([i, j]);
           
        }
    }
}



for (let i = 0; i < nums.length; i++) {
  for (let j = i + 1; j < nums.length; j++) {
    if (nums[i] + nums[j] === target) {
      console.log([i, j]);
    }
  }
} */

  // Function to find pairs with given sum using a hash map
/* 
  function findPairs(arr) {
    let seen = {};
    for (let i = 0; i < arr.length; i++) {
        let complement = 10 - arr[i];
        if (seen[complement] !== undefined) {
            console.log(`Indices: ${seen[complement]} and ${i}`);
        }
        seen[arr[i]] = i;
        console.log(seen);
    }
}

let array = [3, 9, 1, 4, 2, 6, 5, 16, 8, 7];
findPairs(array); */



/* function findPairsWithTarget(arr, target) {
    let seen = {};
    for (let i = 0; i < arr.length; i++) {
        let complement = target - arr[i];
        if (seen[complement] !== undefined) {
            console.log(`Indices: ${seen[complement]} and ${i}`);
        }
        seen[arr[i]] = i;
        console.log(seen);
    }
}

let array = [3, 9, 1, 4, 2, 6, 5, 16, 8, 7];
let target = array.length;
findPairsWithTarget(array, target); */


/* function findPairsWithTarget(arr, target) {
    let seen = {};
    let pairs = [];
    
    for (let i = 0; i < arr.length; i++) {
        let complement = target - arr[i];
        if (seen[complement] !== undefined) {
            console.log(`Indices: ${seen[complement]} and ${i}`);
            pairs.push([seen[complement], i]);
        }
        seen[arr[i]] = i;
    }
    
    return pairs;
}

let array = [3, 9, 1, 4, 2, 6, 5, 16, 8, 7];
let target = 10;
let result = findPairsWithTarget(array, target);
console.log('Result:', result); // Output the pairs */


let arr= [ 
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
    });