//by using literal way

let arr=[10, 'hello', true, undefined, null, 1n]
console.log(arr);

//by using new keyword

let arr1= new Array(10, 20, 30)
console.log(arr1);

//methods

let arr2=[10,20,30,40,50]
console.log(arr2);

//Length property
console.log(arr2.length);//length

console.log(arr2.length-1);//index

//indexof()
console.log("****************");
console.log(arr2.indexOf(10));

//Unshift
let arr3=arr2.unshift(1,2)
console.log(arr3);
console.log(arr2);

//shift
console.log(arr2.shift());
console.log(arr2);

//Push
console.log(arr2.push(60,70));
console.log(arr2);

//Pop
console.log(arr2.pop());
console.log(arr2);
console.log("#################")
//Slice
console.log(arr2.slice(0,3));
console.log(arr2.slice(-4,-1));
console.log("alskdjflskdj");
//Splice
console.log(arr2.splice(0,1,"HEllo"));
console.log(arr2);

//Join
console.log(arr2.join("+"));

//Reverse()
console.log(arr2.reverse());

//Concat()
let arr4=[10,20,30]
let arr5=[40,50,60]
console.log(arr4.concat(arr5));

//Sort()
let arr6=[20,54,36,74]
console.log(arr6.sort());

let arr7=[1,45,786,78,63,1546]
let arr8=arr7.sort((a,b) => {
    return a-b;//Descending to Ascending
})
console.log(arr8);

//Includes()
console.log(arr2.includes(10));
console.log(arr8.toString());

//isArray
console.log(Array.isArray(arr2));
let arr9=[10,54,32,87,20]
console.log(arr9);

//forEach
arr9.forEach((value,index) => {
    console.log(`${value} ---> ${index}`);
}) 

//filter
let a=arr9.filter((ele) => {
    return ele >10
})
console.log(a);

//map
let b=arr9.map((ele) => {
    return ele+10
})
console.log(b);

//reduce
let c=arr9.reduce((acc,li) => {
    return acc+li;
})
console.log(c);

let c1=arr9.reduce((acc,li) => {
    return acc+li;
},10)
console.log(c1);

//from()
let str="Shannu"
console.log(Array.from(str));

