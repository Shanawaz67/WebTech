'use strict'
// console.log("Hello Scope");

// //Global Scope
// var a=10;
// console.log(a);

// //Local Scope
// let b=20;
// console.log(b);

// const c=30;
// console.log(c);

// //Block Scope
// {
//     var m=10;
//     console.log(m);
//     let b=20;
//     console.log(b);
//     const c=30;
//     console.log(c);
// }

///difference between var let and const


// 1 Scope
// var a=10;
// console.log(a);
console.log(window);

let b=20;
console.log(b);

const c=30;
console.log(c);
console.log(window);

// 2 declaration 
var a;
console.log(a);

let d;
console.log(d);

// const e;
// console.log(e);

// 3 dec and init

var a1=25.5;
console.log(a1);

let b1=25.6;
console.log(b1);

const c1=25.7;
console.log(c1);

// 4 Re-init

var a2=10;
    a2="hello"
    console.log(a2);

let b2=20;
    b2="web-tech"
console.log(b2);

// const c2=30;
//       c2="hii";
// console.log(c2);

// 5 Re-dec and Re-init

var a3=26.5;
console.log(a3);
var a3="hello1";
console.log(a3);

// let b3=26.6;
// console.log(b3);
// let b3="web-tech1"
// console.log(b3);

// const c3=26.7;
// console.log(c3);
// const c3="hii1"
// console.log(c3);

// var a4=23;
// console.log(a4);
// console.log(window);

//hoisting
console.log(a5);
var a5=10;


// console.log(b5);
// let b5=20;


// console.log(c5);
// const c5=30;