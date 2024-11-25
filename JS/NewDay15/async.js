// window.setTimeout(() => {
//     console.log("i am set-time-out");
// },5000);

// window.setInterval(()=>{
//     console.log("i am set-interval");
// },3000);

function main(m,n)
{
    setTimeout(() => {
        for(let i=m;i<=n;i++){
            console.log(1);
        }
    },5000)
}
main(1,20);

function demo()
{
    console.log("Numers printed");
}
demo()