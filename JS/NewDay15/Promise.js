// let promise=new Promise((resolve,reject) => {

// })
// console.log(promise);

//eg:1
let api=true;
let promise=new Promise((resolve,reject) => {
    setTimeout(() => {
        if(api){
            return resolve();
        }
        else{
            return reject();
        }
    },3000);
})
.then(() => {
    console.log("API is fetched");
})
.catch(() => {
    console.log("API is not fetched");
})
function demo(){
    console.log("Hello dude");
}
demo();

//eg:2

function main(m,n){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(isNaN(m) || isNaN(n)){
                return reject();
            }
            else{
                for(let i=m;i<=n;i++){
                    console.log(i);
                }
                return resolve();
            }
        },3000);
    })
    .then(() => {
        console.log("Num's printed");
    })
    .then(() => {
        console.log(5+51);
    })
    .catch(() => {
        console.log("Num's not printed");
    })
}
main(1,20)

function demo1(){
    console.log("Hello demo1");
}
demo1();