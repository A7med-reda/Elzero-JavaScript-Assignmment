///// Q1  ///// 


function sayHello(theName, theGender) {
    // if(theGender === "Male"){
    //     theGender="Mr"
    // }
    // else if(theGender === "Female"){
    //     theGender = "Miss"
    // }
    // else{
    //     theGender =","
    // }
    theGender ==="Male"?theGender="Mr":theGender==="Female"?theGender="Miss":theGender="";

 console.log(`Hello ${theGender} ${theName}`)
}
// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

////// Q2 /////// 
function calculate(firstNum, secondNum, operation="add") {
    if(secondNum === null || secondNum === undefined){
        console.error("Second Number Not Found")
    }
    else{
        if(operation === "add"){
            return firstNum+ secondNum ;
        }
        else if(operation === "subtract"){
            return firstNum - secondNum ;
        }
        else if(operation === "multiply"){
            return firstNum * secondNum ;
        }
    }
}

  // Needed Output
calculate(20); // Second Number Not Found
console.log( calculate(20, 30)); // 50
console.log(calculate(20, 30, 'add')); // 50
console.log(calculate(20, 30, 'subtract')); // -10
console.log(calculate(20, 30, 'multiply')); // 600


/// Q3 ///// 
function ageInTime(theAge) {
    if(theAge >=10 && theAge <= 100 ){
        let ageMonths = theAge * 12 ;
        let ageWeeks = ageMonths / 4 ;
        let ageDays = ageWeeks *7 ;
        let ageHours = ageDays * 24 ;
        let ageMinutes = ageHours * 60 ;
        let ageSeconds = ageMinutes *60;
        console.log(`
        ${ageMonths} Months,
        ${ageWeeks} Weeks ,
        ${ageDays} Days ,${ageHours} Hours ,
        ${ageMinutes} Minutes ,${ageSeconds} Secondes`)
    }
    else
    console.log(`Age Out Of Range`)
}

  // Needed Output
  ageInTime(110); // Age Out Of Range
  ageInTime(38); // Months Example => 456 Months


//// Q4 /////
function checkStatus(a, b, c) {
    let data =[a,b,c] , userName , age ,statues ;
    for (let i = 0; i < data.length; i++) {
    typeof data[i]=== "string"? userName= data[i]:
    typeof data[i]=== "number"?age= data[i]:
    typeof data[i]=== "boolean"?statues= data[i]:""
    }
    statues === true?(statues ="You Are Available For Hire"):
    (statues="You Are Not Available For Hire")
    console.log(`Hello ${userName} , Your Age is ${age} ,${statues}`)
}



// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

///// Q5 /////
function createSelectBox(startYear, endYear) {
    document.write(`<select>`)
    for (let i = startYear; i <= endYear; i++) {
        document.write(`<option value = ${i}> ${i} </option> `)   
    }
    document.write(`</select>`)
  }
createSelectBox(2000, 2021);



//////  Q6  /////
function multiply(...num){
    let answer ;
    for (let index = 0; index < num.length; index++) {
        if(typeof num[index] === "string"){
        continue ;
        }
        else {
            answer= Math.trunc(num[index]);
            return answer*= num[index+1] ;
        }
    }

}
console.log(multiply(10, 20)); // 200
console.log(multiply("A", 10, 30)); // 300
console.log(multiply(100.5, 10, "B")); // 1000