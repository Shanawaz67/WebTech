// console.log(demo());
// function demo() {
//     console.log('hello world');
//     return 'hello'
// }
// console.log(demo);
// console.log(demo());

// function demo1(a,b) {
//     let c = a+b;
//     return c
// }
// console.log(demo1);
// console.log(demo1(10,10));
// console.log(demo1(10+10,10));

// function demo2() {
//     console.log(arguments);
//     console.log(arguments.length);
//     console.log(arguments[0]);
//     console.log(arguments[1]);
// }
// console.log(demo2(10,10));

// let a=window.prompt("what is your name")
// console.log(a);

// let a=Number(prompt("enter a"))
// let b=Number(prompt("enter b"))

// let c=a+b;
// console.log(c);

// let a=(prompt("enter a"))
// let b=(prompt("enter b"))

// let c=a-b;
// console.log(c);
// function demo3(){
//     let a=Number(prompt("enter a"))
//     let b=Number(prompt("enter b"))
//     let c=Number(prompt("enter c"))
//     let d=(a+b+c);
//     return d
// }
// console.log(demo3());
// window.alert(`the sum of total number = ${demo3()}`)

console.log(window);
console.log(this);

var a="hello-world"
// let a="hello-world"
function demo() {
    var a=10;
    console.log(a);
    console.log(this.a);
}
demo()