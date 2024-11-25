window.fetch("Https://fakestoreapi.com/products")
.then(res1 => res1.json())
.then((data1) => {
    console.log(data1);
    for(let ele1 of data1){
        let demo1=document.getElementById("demo1");
        console.log(demo1);
        let tr=`
        <tr>
        <td>${ele1.id}</td>
        <td>${ele1.title}</td>
        <td>${ele1.price}</td>
        <td>${ele1.description}</td>
        <td>${ele1.category}</td>
        <td><img src=${ele1.image} /></td>
        `
        demo1.innerHTML +=tr
    }
})