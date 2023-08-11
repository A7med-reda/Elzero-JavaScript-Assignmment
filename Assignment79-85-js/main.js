//////// Q1 ///////
// Create Your Object Here
let member = {
  name: "Elzero",
  age: 38,
  country: "Egypt",

  fullDetails: function () {
    return ` My Name Is ${this.name}, My Age Is ${this.age}, I Live in ${this.country}`;
  },
};
console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt

/////// Q2 ///////

// Method One
let obj1 = {
  name: "Hello 1",
};

console.log(obj1.name); // "Method One"

// Method Two
let obj2 = new Object({
  name: "Hello 2",
});
console.log(obj2.name); // "Method Two"

// Method Three
let obj3 = Object.create(obj1);
obj3.name = "Hello 3";
console.log(obj3.name); // "Method Three"

// Method Four
let obj4 = Object.assign({}, { name: "Hello 4" });
console.log(obj4.name); // "Method Four"

////// Q3 //////
let a = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

// Create Your Object Here in One Line
let finalObject = Object.assign({}, { a }, threeNums, twoNums);
console.log(finalObject);

/*
  a: 1
  b: 2
  c: 3
  d: 4
  e: 5
  f: 6
*/

////// Q4 ///////
// The Object To Work With
let myFavGames = {
  "Trinity Universe": {
    publisher: "NIS America",
    price: 40,
  },
  "Titan Quest": {
    publisher: "THQ",
    bestThree: {
      one: "Immortal Throne",
      two: "Ragnarök",
      three: "Atlantis",
    },
    price: 50,
  },
  YS: {
    publisher: "Falcom",
    bestThree: {
      one: "Oath in Felghana",
      two: "Ark Of Napishtim",
      three: "origin",
    },
    price: 40,
  },
};

// Code One => How To Get Object Length ?
let objectLength = Object.keys(myFavGames).length;
for (let i = 0; i < objectLength; i++) {
  console.log(`The Game Name Is ${Object.keys(myFavGames)[i]}`);
  console.log(`The Publisher Is ${myFavGames[Object.keys(myFavGames)[i]].publisher}`);
  console.log(`The Price Is ${myFavGames[Object.keys(myFavGames)[i]].price}`);

  // Check If Nested Object Has Property (bestThree)
  if (myFavGames[Object.keys(myFavGames)[i]].hasOwnProperty("bestThree")) {
    console.log("- Game Has Releases");
    console.log(`${myFavGames[Object.keys(myFavGames)[i]].bestThree.one} `);
    console.log(`${myFavGames[Object.keys(myFavGames)[i]].bestThree.two} `);
    console.log(`${myFavGames[Object.keys(myFavGames)[i]].bestThree.three} `);
  }
  console.log("#".repeat(20));
}

// Ouput

("The Game Name Is Trinity Universe");
("The Publisher Is NIS America");
("The Price Is 40");
("####################");
("The Game Name Is Titan Quest");
("The Publisher Is THQ");
("The Price Is 50");
("- Game Has Releases");
("First => Immortal Throne");
("Second => Ragnarök");
("Third => Atlantis");
("####################");
("The Game Name Is YS");
("The Publisher Is Falcom");
("The Price Is 40");
("- Game Has Releases");
("First => Oath in Felghana");
("Second => Ark Of Napishtim");
("Third => origin");
("####################");
