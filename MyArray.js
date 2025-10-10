// //<script> 
// console.log("Good Morning");

// let a = []

// //we dont need to provide size 
// //add => +++ 
// //remove => -- 

// //arr => object 


// let arr = [10, 20, 30, 40, 50];

// arr.push(60);
// arr.push(70);


// console.log(arr);

// //count total elements in array 
// console.log("Len => " + arr.length);


// //if you want to access single element from array -> you can using index 
// //index start with 0 
// //ends with length-1 

// console.log(arr[0]);


// console.log("All Data => ");
// // console.log(arr[0]);
// // console.log(arr[1]);
// // console.log(arr[2]);
// // console.log(arr[3]);
// // console.log(arr[4]);


// let sum = 0; 
// let max = arr[0]; 
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//     sum = sum + arr[i];

//     if( max < arr[i] ){
//         max = arr[i]
//     }
// }
// console.log("sum => "+sum);
// console.log("max => "+max);

//---------------------------------------------------------------------------------------------------------

let x = [1,2,3,4,5,1,2,3,4,5];

//6? 
//4?

//indexOf
console.log(x.indexOf(5));
console.log(x.indexOf(55));


//lastIndexOf
console.log(x.lastIndexOf(5));
console.log(x.indexOf(55));



//includes 
console.log(x.includes(5));//boolean -> true 
console.log(x.includes(55));//false


//
console.log(x.at(0));
console.log(x[0]);

//remove element 
x.pop() ; //last element will remove 
console.log(x);

console.log(x.slice(0,3)) ;
console.log(x.slice(2,4)) ;


console.log(x.splice(2,2));
console.log(x);


















