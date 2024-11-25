//object destructuring

// let obj = {
//     name:'abhi',
//     id : 1,
//     profile : {
//         designation : "developer"
//     }
// }

// let msg = 'msg not found'

// let {name, address = msg} =obj
// console.log(name);
// console.log(address);

// let {profile : {designation}} = obj
// console.log(designation);

//array destr

let [abc , b, c, [d]] = Array
console.log(abc);

console.log(b);

console.log(c);

console.log(d);

let [e,f] = arr[3]
console.log(e);
console.log(f);

//rest parameter and spread operator

function demo(a,...b)
{
    console.log(a);
    console.log(b);
}
demo(10,20,30,40)

let arr =[10,20,30,40]
console.log(...arr);

let str = 'hello'
console.log(...str);

let obj = {
    name : 'abhi',
    id : 1
}

let {...a} = obj
console.log(a);

let arr1 = [10,20,30,40]
// let [...b] = arr1
console.log(b);

let str1 = 'hello-world'
let str2 = [...str1]
console.log(str2);

let arr2=[10,20,30,40]
console.log(arr2);

let arr3=arr2
console.log(arr3);

arr2[4]=50
console.log(arr2);
console.log(arr3);

let arr4=[10,20,30,40]
console.log(arr4);

let arr5=[...arr4]
console.log(arr5);

arr4[4]='hello'
console.log(arr4);
console.log(arr5);