// console.log(demo);
// const demo=function () {
//     console.log("hello world");
// }
// console.log(demo);
// demo()

// let b = function a()
// {
//     console.log("hello");
//}
// console.log(a);
// console.log(b);
// console.log(3+ +'3');

// create fun exp which is used to find largest of 3 nums and input should by the end user
// let c=function d() {
//     let a=Number(prompt("enter a"))
//     let b=Number(prompt("enter b"))
//     let a1=Number(prompt("enter a1"))
//     console.log(((a>b)?a:b)?((b>a1)?b:a1):((a1>a)?a1:a));
// }
// console.log(c());

// let ope = function()
// {
//     let a = Number(prompt("enter a"))
//     let b = Number(prompt("enter b"))
//     let c = Number(prompt("enter c"))

//     if(a>b && a>c){
//         console.log(" a is the largest" +a);
//     }
//     else if(b>a && b>c){
//         console.log(" b is the largest" +b);
//     }
//     else{
//         console.log(" c is the largest" +c);
//     }
// }
// ope()

let demo1=function(a){
    console.log(a);
    console.log(arguments);
    console.log(arguments.length);
    console.log(arguments[1]);
}
demo1(10,20,30,40,50)

//create a HOF and CBF add of 2 nums and sub of 2 num and input should given by the end user by 2 ways 

// function operation(a,b,task,) {
//     let c=task(a,b);
//     return c
// }
// operation(10,10,function (a,b){
//     return a+b
// }
// )
// operation(10,10,function (a,b){
//     return a-b
// }
// )
// operation()

function operation1() {
    let a=Number(prompt("enter a for add"))
    let b=Number(prompt("enter b for add"))
    let c=Number(prompt("enter c for sub"))
    let d=Number(prompt("enter d for sub"))
}
operation1(a,b,function(a,b){
    
})