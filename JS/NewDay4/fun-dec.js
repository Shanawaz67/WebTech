function demo()
{
    console.log("Hello-World");
}
console.log(demo);
demo();
console.log(demo());//if we give clg inside the func and we are using again outside the func then undefined will get.

//----------------

console.log(demo1);
console.log(demo1());
function demo1()
{
    return "hello-world";
}
console.log(demo1);
console.log(demo1());

//Function to perform addition

function add(a,b)
{
    let c=a+b;
    return c;
}
console.log(add);
console.log(add(10,20));
console.log(add(5+5,30));

//arguments given by the end users we have to use the prompt method it is present inside a window object

// let a =Number(prompt("Enter a value"));
// let b= Number(prompt("Enter b value"));
//  console.log(a+b);

    var m=Number(prompt("enter the m value"));
    var n=Number(prompt("enter the n value"));
 function add1(){
    // let m=Number(prompt("enter the m value"));
    // let n=Number(prompt("enter the n value"));
    let o=m+n;
    return o;
 }
 console.log(add1());