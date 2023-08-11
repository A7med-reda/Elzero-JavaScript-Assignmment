////// Q1  //////

let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let string = mix
  .map(function (el) {
    //  return typeof el ==="string"? el : ""
    return isNaN(parseInt(el)) ? el : "";
  })
  .reduce((acc, el) => `${acc}${el}`);
console.log(`${string}`);
// Elzero

///// Q2 /////
let myString = "EElllzzzzzzzeroo";

let text = myString
  .split("")
  .filter((el, index, arr) => {
    return arr[index] !== arr[index + 1];
  })
  .reduce((acc, el) => `${acc}${el}`);

console.log(text);

// Elzero

//////      Q3  ////////
let myArray = ["E", "l", "z", ["e", "r"], "o"];

let arr = myArray.reduce((acc, el) => acc.concat(el), []).join("");

console.log(arr);
// Elzero

/////// Q4 ///////
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

// let nums = numsAndStrings.filter((el)=> parseInt(-el))
let nums = numsAndStrings.filter((el) => parseInt(el)).filter((el) => -el);

console.log(nums);
// [-1, -10, 10, 20, -5, -3]

///// Q5 ///////
let nums = [2, 12, 11, 5, 10, 1, 99];

let x = nums.reduce((acc, curVal) => {
  console.log(`acc ==> ${acc}`);
  console.log(`curr value ==> ${curVal}`);
  console.log(curVal % 2 !== 0 ? acc * curVal : acc + curVal);
  return curVal % 2 !== 0 ? acc + curVal : acc * curVal;
}, 1);
console.log(x);
// 500
