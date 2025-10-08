
let myArr = [11,22,33,4,5,66,7,8,9,23,100]


// console.log("all items from array => ");
// for(let i=0; i < myArr.length; i++){
//     console.log(myArr[i]);
// }

// myArr.forEach(e =>  console.log(e) );
//add 10 in all the elements and print all data 

// console.log("addition of 10 => ");
// myArr.forEach(x => console.log(x +10 )); 


console.log("original :  " +myArr);

//array => sub array 
//sat -> [1,2,3,4,5,6,7,8,8,9,0] 
// djParty -> [3,4,5,6]
//filter 


//print all the odd numbers from array 

let oddArr = myArr.filter(x => x % 2 != 0 )
console.log("oddArr : "+oddArr);

let evenArr = myArr.filter(x => x%2 ==0 )
console.log("eveArr : "+evenArr);
console.log("original : "+myArr);




//take an array of 10 size 
//print all the numbers which can divide by 3
let arr = [11,22,33,44,54,55,66,77,88,9,99]

let arr3 = arr.filter( x => x%3 == 0 )

// print all the numbers which can divide by 7
let arr7 = arr.filter( x => x%7 == 0 )

//print all the numbers which can divide by 3 and 7 
let arr37 = arr.filter( x => x%3 == 0 && x%7 == 0 )


//create 1 names array with 7 different name 

let namesArr = ["ram","shyam","ganshyam","radheshyam","ravan","laxman","bharat"]
//print all the names who's length is greater than 5 
let names5 = namesArr.filter (x => x.length > 5  )

//print all the names with their length 

namesArr.forEach( x => console.log(x+":"+x.length));


