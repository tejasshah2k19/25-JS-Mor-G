console.log("this is external JS ");


let a = [] 


let names =  ["ram","shyam","ganshyam","radheshyam","ravan","laxman"]

console.log(names.length);
console.log(names[2]);
console.log(names.at(2));//at -> index -> return element 


let arr  =[11,22,33,44,55,33,44,22,44,55,66];

//search 
//indexOf
//lastIndexOf 
//includes 

//index of will return index of element if present 
//indexOF will return -1 if element is not present 
console.log(arr.indexOf(44));//left to right -> first occurence ===> 3  
console.log(arr.lastIndexOf(44));//right to left -> ==============> 8 
console.log(arr.indexOf(440));// if not present ======> -1 
console.log(arr.includes(44));//boolean -> true 
console.log(arr.includes(440));// false 





let myArr = [11,22,33,4,5,66,7,8,9,23,100]

console.log("myArr : "+myArr);

// myArr.sort(mySort);

let sortedArr = myArr.toSorted(mySort);
console.log("myArr after Sort : "+myArr);
console.log("sorted Arr : "+sortedArr);


// myArr.reverse()
let arrRev = myArr.toReversed(); 


function mySort(x,y){
    if(x > y){
        return 1;
    }else if( x < y){
        return -1;
    }else{
        return 0;
    }
}


