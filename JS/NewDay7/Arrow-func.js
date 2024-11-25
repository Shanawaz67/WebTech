// implict - return arrow func return key-word is not mandatory

let demo= _ => console.log("hello");
demo()
console.log(demo);
console.log(demo());

// explict - return arrow func return key-word is mandatory

let demo1=_ => {
    return 'hello';
}
console.log(demo1);
console.log(demo1());

//create a HOF and CBF using arrow func

let main=(a) => {
    let b=a();
    return b;
}
// console.log(main);
let c=main(function(){
    return "I am CBF";
})
console.log(c);

//arithmetic func using arrow func

let demo2=(a,b,task) => {
    let d= task(a,b);
    return d;
}
let ad1=demo2(a=Number(prompt("Enter the value of a for add")),b=Number(prompt("Enter the value of b for add")),function(a,b){
    return a+b;
}) ;
window.alert(ad1);
console.log(ad1);
let sub1=demo2(a=Number(prompt("Enter the value of a for sub")),b=Number(prompt("Enter the value of b for sub")),function(a,b){
    return a-b;
}) ;
window.alert(sub1);
console.log(sub1);
let mul1=demo2(a=Number(prompt("Enter the value of a for mul")),b=Number(prompt("Enter the value of b for mul")),function(a,b){
    return a*b;
}) ;
window.alert(mul1);
console.log(mul1);