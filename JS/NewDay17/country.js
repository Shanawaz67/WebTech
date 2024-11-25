// How to use async and await in functions

// For function declaration

// async function data()
// {
//     await
// }
// data()

// For function Expression

// let data=async function(){
//     await
// }

//For Arrow Functions

// let data= async() => {
//     await
// }

//Fetching Country

let a= async () => {
    let b=await window.fetch("country.json")
    console.log(b);
    let data=await b.json()
    console.log(data);
    for(let ele of data){
        console.log(ele);
        let demo=document.getElementById("demo");
        console.log(demo);
        let option=`
        <option value=${ele.country}>${ele.country}</option>
        `
        demo.innerHTML+=option
    }
}
console.log(a());

let a1= async() => {
    let b1=await window.fetch("country.json")
    console.log(b1);
    let data1= await b1.json()
    console.log(data1);
    for(let ele of data1){
        console.log(ele);
        let demo=document.getElementById("demo")
        console.log(demo);
        let demo1=document.getElementById("country")
        console.log(demo1);
        let option=`
        <option value=${ele.country}>${ele.country}</option>
        `
        demo.innerHTML+=option
        demo1.innerHTML+=option
    }
}
console.log(a1());