/***********************************************************************
 * BONUS PROBLEM
************************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples: 

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/

// const subsets = (arr) => arr.reduce((prev, curr) => {
//   prev.concat(prev.map(i => i.concat(curr)), [[]])
// })
debugger
const subsets = (arr) => {
if (arr.length === 0) return [[]]

let el = arr.slice(-1) // value for the last element in the array
let prev = subsets(arr.slice(0, -1)) // Recursion of passing in the rest of the element
console.log("Here" + prev)
return prev.concat(prev.map(x => x.concat(el)))


  // let result = [[]];
  //   for(let val of arr) {
  //     for (let i = 0; i < result.length; i++) {
  //       let temp = result[i].slice(0);
  //       console.log("Here " + val)
  //       temp.push(val)
  //       result.push(temp)
  //     }
  //   }
  //   return result
}

// console.log(subsets([])) // [[]]
// console.log(subsets([1])) // [[], [1]]
// console.log(subsets([1, 2])) // [[], [1], [2], [1, 2]]
console.log(subsets([1, 2, 3])) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}
