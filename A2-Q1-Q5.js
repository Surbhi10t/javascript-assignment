//  Question 1:STRING CONCATENATION

// let firstname = "surbhi";
// let lastname = " Tailor";
// let fullname = firstname.concat(lastname);
// console.log(fullname);

// Question 2: IF-ELSE STATEMENTS

// let num = 8;
// if(num>0){
//     console.log("positive");
// }
// else if(num<0){
//     console.log("negative");
// }
// else{
//     console.log("zero");
// }

//  Question 3: LOOPS

// for(let i=1 ; i<=10 ; i++){
//     console.log(i);
// }


//  Question 4:FUNCTION


// function greet(firstname){
//      console.log("hello",firstname);
// }
// greet("SURBHI");


//  Question 5: ARRAYS

let arr=[10,20,30,40,50];
let sum = arr.reduce((acc, curr)=>{
    return acc+curr;
});
console.log(sum);
