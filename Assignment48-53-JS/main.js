// ////// Q1  //////

let start = 10;
let end = 100;
let exclude = 40;

for (let i = start ; i <= end; i+=start) {
    if(  i === exclude ){
        continue ;
    }
    console.log(`${ [i]}`);    
}


// Output
// 10
// 20
// 30
// 50
// 60
// 70
// 80
// 90
// 100



//// Q2 /////// 
let startQ2 = 10;
let endQ2 = 0;
let stopQ2 = 3;

for (let i = startQ2; i >= endQ2; i--) {
    if (i < stopQ2) {
        break;
    }
    console.log(` 0${i}`);
}

// Output
// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03


//// Q3  /////
let start = 1;
let end = 6;
let breaker = 2;
for (let i = start; i <= end ; i++) {
    console.log(i);
    for (let k = breaker; k <= 4; k+=2) {
        console.log(`--${k}`)       
     }
}

// Output
// 1
// -- 2
// -- 4
// 2
// -- 2
// -- 4
//3
// -- 2
// -- 4
// 4
// -- 2
// -- 4
// 5
// -- 2
// -- 4
// 6
// -- 2
// -- 4


// Q4 ////// 
let index = 10;
let jump = 2;
let end = 0;

for (;;){
    if(index > jump){
        console.log(index);
        index-=jump ;
    }
    else
    break;
}

Output
//10
//8
//6
//4


///  Q5 ////
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let counter = +true;
for (let i = friends.length-friends.length ; i < friends.length ; i++) {
    if(friends[i].startsWith(letter.toUpperCase())){
    continue;
    }
    else{
    console.log(`"${counter}=>${friends[i]}"`)
    }
    counter++
}

//Output
// "1 => Sayed"
// "2 => Eman" 
/// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"

//// Q6 ////
let start = 0;
let swappedName = "elZerO";
let str=" ";
for( let i= start ; i < swappedName.length ; i++){
    if(swappedName[i]===swappedName[i].toUpperCase()){
        str+=swappedName[i].toLowerCase()
    }
    else{
    str+=swappedName[i].toUpperCase();
    }
}
 console.log(str)
// // Output
// "ELzERo"


//// Q7 ///
let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];
for (let i = start ; i  < mix.length ;i++){
    if( typeof mix[i] === "string" || mix[i]== mix[start])
    {
        continue;
    }

    console.log(mix[i])
}

// // Output
// 2
// 3
// 4