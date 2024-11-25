//func-programming

//eg1

function main(a)
{
    let c=a();
    return c;
}
let demo=main(function(){
    console.log("Hello");
})
demo
// console.log(main);
//console.log(main()); type erro
// console.log(demo);
let demo1=main(function(){
    console.log("Java");
})

//eg-2

function main1(a,b){
    let c=a();
    let d=b();
    return [c,d]
}
let momo=main1(function(){
    let a=10;
    let b=20;
    return c=a+b;
},function(){
    let a=10;
    let b=20;
    return c=a*b;
});
console.log(momo);

//eg-3

function main2(a,b){
    console.log(a());
    console.log(b());
}
let momo1=main2(function(){
    return "java";
},function(){
    return "web-tech";
})
momo1

//create a HOF and CBF to perform arithmetic operation of two num's using func-dec statement and func-exprestion
//note:input should be given by user
// var a1=(Number(prompt("Enter the value of a1")));
// var b1=(Number(prompt("Enter the value of b1")));
// function arithmetic(a,b){
//     let c=a();
//     let d=b();
//     return [c,d]
// }
// let demo11=arithmetic(function (){
// //  let a1=10;
// //  let b1=20;
//  return a1+b1;
// },function(){
//     // let a1=10;
//     // let b1=20;
//     return a1*b1;
// })
// console.log(demo11);

// function arith(a,b,task){
//     let c=task(a,b);
//     return c;
// }
// // window.alert(c);
// let add=arith(a=Number(prompt("Enter the value of a for sum")),b=Number(prompt("Enter the value of b for sum")),function(a,b){
//     return a+b;
// });
// window.alert(add);
// let sub=arith(a=Number(prompt("Enter the value of a for sub")),b=Number(prompt("Enter the value of b for sub")),function(a,b){
//     return a-b;
// });
// console.log(sub);
// let mul=arith(a=Number(prompt("Enter the value of a for mul")),b=Number(prompt("Enter the value of b for mul")),function(a,b){
//     return a*b;
// });
// // window.alert.add;
//console.log(mul);

function arith(a,b,c,task){
    let d=task(a,b,c);
    return d;
}
// window.alert(c);
let add=arith(a=Number(prompt("Enter the value of a for sum")),b=Number(prompt("Enter the value of b for sum")),c=Number(prompt("Enter the value of c for sum")),function(a,b,c){
    return a+b+c;
});
window.alert(add);
console.log(add);
let sub=arith(a=Number(prompt("Enter the value of a for sub")),b=Number(prompt("Enter the value of b for sub")),c=Number(prompt("Enter the value of c for sub")),function(a,b,c){
    return a-b-c;
});
window.alert(sub);
console.log(sub);
let mul=arith(a=Number(prompt("Enter the value of a for mul")),b=Number(prompt("Enter the value of b for mul")),c=Number(prompt("Enter the value of c for mul")),function(a,b,c){
    return a*b*c;
});
// window.alert.add;
window.alert(mul);
console.log(mul);

let largestnum = arith(a=Number(prompt("Enter the value of a for large num")),b=Number(prompt("Enter the value of b for large num")),c=Number(prompt("Enter the value of c for large num")),function(a,b,c){
    if((a>b)?((a>c)?console.log(`${a} is the highest value`):console.log(`${c} is the highest value`)):((b>c)?console.log(`${b} is the highest value`):console.log(`${c} is the highest value`)));
})
window.alert(largestnum);
largestnum