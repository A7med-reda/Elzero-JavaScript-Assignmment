///////  Q1

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1

console.log(myFriends.slice(num-num , num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
//myFriends.pop()
myFriends.splice(num , num)
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

/////// Q2
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.shift();
friends.pop()
console.log(friends); // ["Eman", "Osama"]

////// Q3
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
finalArr =arrTwo.concat(arrOne).sort().reverse();
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

// ////// Q4
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];
console.log(words.length)

console.log(words[words.length-true][0].slice(words.length-true).toUpperCase()); // ZERO

///// Q5
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
 if(haystack.includes("JS") === true)
 {
     console.log("Found");
 }
 
 if(haystack.indexOf("JS") === 1)
 {
     console.log("Found");
 }
 if(haystack.lastIndexOf("JS") === 1)
 {
     console.log("Found");
 }


 ///// Q6
 let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs = arr1.concat(arr2.reverse()).sort()
console.log(allArrs.slice(allArrs.indexOf("F")).join("").toLowerCase()); // fxy
