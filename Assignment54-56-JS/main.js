let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;
let num =1 ;

while(counter < friends.length){
    if(typeof friends[counter] === "string" && friends[counter][index] !== 'A' ){
    
        console.log(`${num++}=> ${friends[counter]}`);
    }

    counter++ ;
}


// Output
// "1 => Sayed"
// "2 => Mahmoud"

