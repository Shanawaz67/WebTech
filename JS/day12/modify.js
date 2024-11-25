// let a =document.body.innerHTML +="<p>hello-world</p>"

// document.body.innerHTML +="<span>hello</span>"
// document.body.innerHTML +=`
// <ol>
// <li>item1</li>
// <li>item2</li>
// </ol>
// `
let h1=document.createElement("h1")
console.log(h1);
h1.textContent="hello"

document.body.appendChild(h1)

//ol list

let ol=document.createElement("ol")
console.log(ol);

ol.setAttribute("type","A")

document.body.appendChild(ol)

let li1=document.createElement("li")
console.log(li1);
li1.textContent="item1"

ol.appendChild(li1)

let li2=document.createElement("li")
console.log(li2);

li2.textContent="item2"

ol.appendChild(li2)

let table=document.createElement("table")
console.log(table);
table.style.border="2px solid"
document.body.appendChild(table)

let tr1=document.createElement("tr")
console.log(tr1);

let td1=document.createElement("td")
console.log(td1);
td1.textContent="1"

td1.style.border="2px solid red"

tr1.appendChild(td1)

table.appendChild(tr1)