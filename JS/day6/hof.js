// function demo2(a) {
//     let b=a();
//     return b
// }
// console.log(demo2(function () {
//     console.log("i am call-back1");
// }));
// console.log(demo2(function () {
//     console.log("i am call-back2");
// }));

//for fun-expersion
// let demo2=function (a) {
//     let b=a();
//     return b
// }
// demo2(function () {
//     console.log("i am call-back1");
// });
// demo2(function () {
//     console.log("i am call-back2");
// });

// let a=Number(prompt("enter a"));
// let b=Number(prompt("enter b"));
// function operation(task) {
    
//     let c=task(a,b)
//     return c
// }
// let res = operation(function(a,b){
//     return a+b
// })
// console.log(res);
// let res1 = operation(function(a,b){
//     return a-b
// })
// console.log(res1);


// function operation(task) {
//     let a=Number(prompt("enter a"));
//     let b=Number(prompt("enter b"));
//     let c=task(a,b)
//     return c
// }
// let res = operation(function(a,b){
//     return a+b
// })
// console.log(res);
// let res1 = operation(function(a,b){
//     return a-b
// })
// console.log(res1);

//arrow function

//implicit arrow function

// let a = () => console.log('hello world');
// console.log(a());

// let b=()=>{
//     return "hello world"
// }
// console.log(b());

// let c=(a,b)=>console.log(a+b);
// console.log(c(10,10));

// let d=(a,b)=>{
//     let c=a+b;
//     return c;
// }
// console.log(d(10,40));

//create a hof and cbf using arrow fun to  preform addition of 3 nums and mul of 3 nums and to find the largest of 3 nums and input is given by the end users

let a=Number(prompt("enter a"));
let b=Number(prompt("enter b"));
let c=Number(prompt("enter c"));

let add=()=>{
    let d=a+b+c;
    return d;
}
console.log(add());
// console.log(d);
let mul=()=>{
    let d=a*b*c;
    return d;
}
console.log(mul());

let largest=()=>{
    if(a>b && a>c){
        console.log("a is the largest num" +a )
    }
}
console.log(largest());

let a1 = Number(prompt("enter a1"))
let b1 = Number(prompt("enter b1"))
let c1 = Number(prompt("enter c1"))

let operation = (a,b,c,task) =>{
    let d=task(a,b,c)
    return d
}

let res=operation(a,b,c,(a,b,c)=>{
    return a+b+c;
})