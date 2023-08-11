document.write("<h1>ElZero</h1>");
document.querySelector("h1").style.color= "blue";
document.querySelector("h1").style.fontSize= "80px";
document.querySelector("h1").style.fontweight= "bold";
document.querySelector("h1").style.textAlign= "center";
document.querySelector("h1").style.fontFamily= " Arial";

console.log(" %cElZero %cWeb %cschool" ,
"color: red ; font-size:40px ",
 "color: green ; font-size:40px" ,
 " color: white; background-color: blue ; font-size:40px" )

 console.group("Group 1");
 console.log("Message One");
 console.log("Message Two");
 
 console.group("Child Group");
 console.log("Message One");
 console.log("Message Two");
 
 console.group("Grand Child Group");
 console.log("Message One");
 console.log("Message Two");
 
 console.groupEnd("Group 1");
 console.groupEnd("Child Group");
 console.groupEnd("Grand Child Group");
 
 console.group("Group 2");
 console.log("Message One");
 console.log("Message Two");


 console.table(["aya ", " ahmed ", " abdo"])
 
//  
/*

*/