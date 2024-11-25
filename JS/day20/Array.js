// // literal way

// let arr = [10,'hello',true,undefined]
// console.log(arr);

// //new keyword

// let arr1 = new Array(10,20,30,40)
// console.log(arr1);

// methods

let arr =[10,20,30,40]
console.log(arr);

console.log(arr.length);

console.log(arr.pop());

console.log(arr.push(50));

console.log(arr);

console.log(arr.shift());

console.log(arr.unshift(5,10));

console.log(arr);

console.log(arr.reverse());

console.log(arr.join('+'));

let arr1=[10,20,30,40]
console.log(arr1);

console.log(arr1.slice(0,3));

console.log(arr1.splice(0,2,'hello'));

console.log(arr1);

let arr2 = [50,40,30,20,10]
console.log(arr2);

console.log(arr2.sort());

let arr3=[1000,500,1,20]
console.log(arr3.sort((a,b)=>
{
    return b-a//accessending to deccesending
    //a-b deccensding to accessending order
}));

console.log(Array.isArray(arr));

let str ="hello"

let str1=Array.from(str)
console.log(Array.isArray(str1));

let arr4= [10,20,30,40]
console.log(arr4);

arr4.forEach((value,index)=>{
    console.log(`${value}----> ${index}`);
    let li=`<li>${value}--->${index}</li>`
    document.body.innerHTML += li
})

arr4.map((ele)=>{
    console.log(ele +10);
})

let arr5=arr4.filter((ele) =>{
    return ele>10;
})
console.log(arr5);

let arr6=arr4.reduce((acc,li) =>{
    return (acc+li);
},20)
console.log(arr6);

let arr7= [[10]]
console.log(arr7.flat(0[0]));

let arr9 = arr4.every((num)=>{
    return num>0
})
console.log(arr9);