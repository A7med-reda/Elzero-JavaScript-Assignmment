/// Q1 //// 

let numOne = 9;
// Condition Output => "009"
if(numOne<10){
  console.log(`00${numOne}`)
}

let numTwo = 20;
// Condition Output => "020"
if(numTwo > 10 && numTwo < 100){
  console.log(`0${numTwo}`)
}  

let numThree = 110;
// Condition Output => "110"
if(numThree >= 100 ){
  console.log(`${numThree}`)
}

//// Q2  //// 
let num1 = 9;
let str = "9";
let num2 = "20";

// Output
if(num1 == str){
  console.log("{num1} Is The Same Value As {str}")
}
 if(str == num1 && typeof num1 !== typeof str){
  console.log("{num1} Is The Same Value As {str} But Not The Same Type")
}
 if(num1 !== num2){
  console.log("{num1} Is Not The Same Value Or The Same Type As {num2}")
}


//////// Q3 /////////
let _num1 = 10;
let _num2 = 30;
let _num3 = "30";

// Needed Output
if(_num3 > _num1 && typeof _num3 !== _num2 ){
   console.log("{num3} Is Larger Than {num1} And Not The Same Type As {num2}");
}
else if(_num3 > _num1 && _num3 ==  _num2 && typeof _num3 !== typeof _num2){
  console.log("{num3} Is Larger Than {num1}And Value Is The Same As {num2} And Type Is Not The Same As {num2}");
 }
else if(_num3 > _num1 && _num3==_num2 && typeof _num3 !== _num2 ){ 
  console.log("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}");
}

////// Q4 ///////
// Edit What You Want Here

var number1 = 10;
var number2 = 10;
var number3 = "10";
var number4 = 20;

++number1;
number2 = number1 - number2;
number3 = +number3;
++number3;
number4 += number1 + number3;


/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (number1 > number2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (number1 > number2 && number1 < number4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (number1 > number2 && number1 === number3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((number1 + number2) < number4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((number1 + number3) < number4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((number1 + number2 + number3) < number4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (number4 - (number1 + number3) + number2 === 21) {
  console.log("True");
} else {
  console.log("False");
}