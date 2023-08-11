////// Q1 ////

function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    let nameArr = zName.split(" ");
    return `${nameArr[0]} ${nameArr[1].slice(0, 1).toUpperCase()}.`;
  }
  function ageWithMessage(zAge) {
    return `Your Age Is ${parseInt(zAge)} `;
  }

  function countryTwoLetters(zCountry) {
    return `${zCountry.slice(0, 2).toUpperCase()}`;
  }
  function fullDetails() {
    return `Hello  ${namePattern(zName)} ${ageWithMessage(zAge)}
                     ${countryTwoLetters(zCountry)}`;
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY

// // /////// Q2//////

/* function itsMe() {
    return `Iam A Normal Function`;
    }
    console.log(itsMe()); // Iam A Normal Function
*/

let itsMe = () => `Iam A Normal Function`;
console.log(itsMe()); // Iam A Normal Function

let urlCreate = (protocol, web, tld) => {
  return `${protocol}://www.${web}.${tld}`;
};
console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

/////// Q3 //////
// function checker(zName) {
//     return function (status) {
//       return function (salary) {
//         return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
//       };
//     };
//   }

let checker = (zName) => (status) => (salary) =>
  status === "Available"
    ? `${zName}, My Salary Is ${salary}`
    : `Iam Not Avaialble`;

console.log(checker("Osama")("Available")(4000)); // My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

////// Q4 ///////
function specialMix(...data) {
  let sum = 0;
  let allstr = true;
  for (let i = 0; i < data.length; i++) {
    if (typeof parseInt(data[i]) === "number") {
      sum += parseInt(data[i]);
      allstr = false;
    }
  }
  return allstr ? "all is string" : sum;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30

console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test"));
