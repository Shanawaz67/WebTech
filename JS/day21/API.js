// let obj={
//     name : 'abhi',
//     id:1
// }
// console.log(obj);

// let obj1=JSON.stringify(obj)
// console.log(obj1);

// let obj2=JSON.parse(obj1)
// console.log(obj2);

// window.fetch("data.json")
// .then(x => x.json())
// .then((data) =>{
//     console.log(data);
//     data.map((data1) => {
//         console.log(data1);
//         let demo=document.getElementById("demo")
//         console.log(demo);
//         let table = `
//         <tr>
//             <td>${data1.name}</td>
//             <td>${data1.id}</td>
//             <td><img  src= {data1.image} /></td>
//         </tr>
//         `
//         demo.innerHTML +=table
//     })
// })
// .catch((x) => console.log("error occured"))

// let obj ={
//     name : "abhi" ,
//     id : 1
// }

// console.log(obj);

// let obj1 = JSON.stringify(obj)
// console.log(obj1);

// let obj2=JSON.parse(obj1)
// console.log(obj2);

// let a = window.fetch()
// console.log(a);

// window.fetch("https://api.github.com/users")
// .then(x => x.json())
// .then((data)=>{
//     console.log(data);
//     data.map((data1) => {
//         console.log(data1);
//         let demo = document.getElementById("demo")
//         console.log(demo);
//         let table =`
//         <tr>
//             <td>${data1.login}</td>
//             <td>${data1.id}</td>
//             <td><img src =${data1.avatar_url} /></td>
//         </tr>
//         `

//         demo.innerHTML += table
//     })
// })
// .catch((x) => console.log("error occured"))


// window.fetch("country.json")
// .then((x) => x.json())
// .then((x)=> {
//     console.log(x);
//     x.map((x) => {
//         console.log(x);
//         let select = document.getElementById("select")
//         console.log(select);
//         let data = document.getElementById("data")
//         let option = `<option value=${x.country}>${x.country}></option> `
//         select.innerHTML +=option
//         data.innerHTML +=option
//     })
// })

//fetch api
// btn.addEventListener("click" ,()=> {
//     let demo = document.getElementById("demo").value
//     console.log(demo);
//     window.fetch(``)
//     .then((x) => x.json())
//     .then(x => {
//         console.log(x);
//         for(let ele of x.results){
//             console.log(ele);
//             console.log(ele.urls);
//             console.log(ele.urls.regular);
//             let img = `<img src=${ele.urls.regular} />`
//             document.body.innerHTML += img
//         }
//     })
// })

//Using async and await
let btn = document.getElementById("btn")
console.log(btn);

btn.addEventListener("click" , async () => {
    let demo = document.getElementById("demo").value

    let respones = await window.fetch(``)
    console.log(respones);
    let data = await respones.json()
    console.log(data);
    for(let ele of data.results)
    {
        console.log(ele);
        console.log(ele.urls);
        console.log(ele.urls.regular);
        let img = `<img src=${ele.urls.regular} />`
        document.body.innerHTML += img
    }
})

function get_data()
{
    try{
        async() => {
            let respone = await window.fetch("api")
            console.log(respone);
            let data = await respone.json()
            console.log(data);
        }
    }catch (error){
        console.log(error);
    }
}