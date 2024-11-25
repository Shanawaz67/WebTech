//Module's

//default export

var a=30;
console.log(a);

export default a 

//Named export

let b=20
console.log(b);

function demo1(){
    console.log("Hello");
}
demo1()

export{
    b,
    demo1
}