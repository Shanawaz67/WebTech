//demo() cannot access demo before initialization
let demo=function(){
    console.log("hello");
}
console.log(demo);
console.log(demo());
demo()

let demo2=function demo1()
{
    console.log("hello-world");
}
// demo1() func dec will not work
demo2()//priority goes to only func exp

//create a func exp to perform arithmetic operation of 2 num and input should be given by end user

let a=(Number(prompt("Enter the value of a")));
let b=(Number(prompt("Enter the value of b")));
let add=function()
{
    console.log(a+b);
    console.log(a-b);
    console.log(a*b);
    console.log(a/b);
    console.log(a%b);
}
console.log(add());