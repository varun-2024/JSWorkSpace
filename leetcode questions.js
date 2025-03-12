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

/* 
function twoSum(nums, target) {
    let seen = {};
    let pairs = [];
    
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (seen[complement] !== undefined) {
            console.log(`Indices: ${seen[complement]} and ${i}`);
            pairs.push([seen[complement], i]);
        }
        seen[nums[i]] = i;
    }
    
    return pairs;
}

let nums = [3, 9, 1, 4, 2, 6, 5, 16, 8, 7];
let target = 10;
let result = twoSum(nums, target);
console.log('Result:', result); // Output the pairs
 */


// 3 Sum Function

/* function threeSum(nums)
{
    triplets = [];
    for( let i=0; i<nums.length; i++)
    {
        for (let j=i+1; j<nums.length; j++)
        {
            for (let k=i+2; k<nums.length; k++)
            {
                if (nums[i] + nums[j] + nums[k] === 0 && i!==j && j!==k && i!==k)
                {
                    if (triplets[i[i] + i[j] + i[k]] === nums[i] + nums[j] + nums[k] === 0)
                        {
                        console.log(`Already Exists : ${triplets[i][j][k]}`);
                        } else  {
                                console.log(nums[i], nums[j], nums[k]);
                                triplets.push([nums[i], nums[j], nums[k]]);
                                }
                }
            }
        }
    }    
    return triplets;
} */

/* let nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));

function threeSum(nums) {
    let triplets = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2; i++) {
        if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
            let low = i + 1;
            let high = nums.length - 1;
            let sum = 0 - nums[i];
            while (low < high) {
                if (nums[low] + nums[high] === sum) {
                    triplets.push([nums[i], nums[low], nums[high]]);
                    while (low < high && nums[low] === nums[low + 1]) low++;
                    while (low < high && nums[high] === nums[high - 1]) high--;
                    low++;
                    high--;
                } else if (nums[low] + nums[high] < sum) {
                    low++;
                } else {
                    high--;
                }
            }
        }
    }
    return triplets;
}
console.log(threeSum(nums)); */

