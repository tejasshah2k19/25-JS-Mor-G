let str = "Royal Education";

// console.log(str);
// console.log(str.length);//total characters in the string 


// console.log(str.toUpperCase());// method first character small , second -> capital , third -> capital 
// console.log(str.toLowerCase());

//string --> array 
//Royal Education
//012345678911234


// console.log(str[0]);// R 
// console.log(str.at(0));// R 
// console.log(str.charAt(0));// R 


// for(i = 0; i< str.length ; i++ ){
//     console.log(str.charAt(i));
//     console.log(str[i]);
// }
 

let bigString = "jony jony yes papa";

//R is present?
//indexOf
//lastIndexOf
//includes

console.log(bigString.indexOf("p"));//14
console.log(bigString.indexOf("R"));//-1 
console.log(bigString.includes("R"));//false 
console.log(bigString.includes("p"));//true
console.log(bigString.includes("jony"));//true


//1) count all digit present in a string 
//2) count vowels from the string 
//3)reverse string , print original and reverse both string 
//4)string palindrome or not 

