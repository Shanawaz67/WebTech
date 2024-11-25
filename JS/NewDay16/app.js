let obj={
    name:"shannu",
    id:1
}
console.log(obj);

let obj1=JSON.stringify(obj);
console.log(obj1);

let obj2=JSON.parse(obj1);
console.log(obj2);

// console.log(window.fetch());

window.fetch("img.json")
.then(res => res.json())
.then((data) => {
    console.log(data);
    for(let ele of data){
        let demo=document.getElementById("demo");
        console.log(demo);
        let tr=`
        <tr>
        <td>${ele.name}</td>
        <td>${ele.id}</td>
        <td> <img src=${ele.img} /> </td>
        </tr>`
        demo.innerHTML +=tr
    }
})