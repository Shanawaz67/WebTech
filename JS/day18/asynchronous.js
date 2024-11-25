// window.setTimeout(() =>{
//     console.log(" iam settimeout");
// })
// window.setInterval(()=>{
//     console.log(" iam setinterval");
// },5000)

// function demo()
// {
//     console.log("i will take 5min executes");
// }
// demo()

// function demo1()
// {
//     console.log("i will take 5sec executes");
// }
// demo1()

// function demo2()
// {
//     setTimeout(() => {
//         console.log(" i will take 5 mis to execute");
//     })
// }
// demo2()

// function demo3()
// {
//     console.log("i will take 5sec executes");
// }
// demo3()

// function demo4()
// {
//     console.log("i will take 4sec executes");
// }
// demo4()

function demo(m,n){
    setTimeout(() => {
        for(let i=m; i<=n; i++){
            console.log(i);
        }
    },3000)
}
demo(10, 20) //demo(10,"20s")

function demo1(){
    console.log("message printed");
}
demo1()

// Promise

// let promise = new Promise((resolve) => {

// })

// console.log(promise);

// let room = false

// let promise = new Promise((resolve,reject) => {
//     if(room){
//         resolve()
//     }
//     else{
//         reject()
//     }
// })
// .then(() => {
//     console.log("room is cleaned");
// })
// .catch(() => {
//     console.log("room is not cleaned");
// })
// .finally(() => {
//     console.log("room only not there");
// })

function demo(m,n)
{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(isNaN(m) || isNaN(n)){
                reject()
            }
            for(let i=m;i<=n;i++){
                console.log(i);
            }
            resolve()
        },3000)
    })
    .then(() => {
        let a=10;
        let b=20;
        let c=a+b
        console.log(c);
    })
    .then(() => {
        console.log("iam successful");
    })
    .catch(() => {
        console.log("error is printed");
    })
}
demo(1,10)
function demo1()
{
    console.log("message printed");
}
demo1()