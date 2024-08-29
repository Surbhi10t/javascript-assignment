//  QUESTION 6:

let arr =[10,20,30,40,50,60];
let slicedarr = arr.slice(2,5);
console.log(slicedarr);
console.log(arr);

//  QUESTION 7:

let arr1 = [10,20,30,40,50];
let index = arr.indexOf(30);
console.log(index);

//  QUESTION 8:


let arr2 = [10,20,30,40,50];
let newarr = arr2.map((item, i)=>{
    return item * 10;
})
console.log(newarr);

//  QUESTION 9:

let arr3 = [10,20,30,40,50,60];
let filterarr = arr3.filter(item=>item>20);
console.log(filterarr);

//  QUESTION 10:

let arr4=[10,20,30,40,50];
let sum = arr4.reduce((acc, curr)=>{
    return acc+curr;
});
console.log(sum);
