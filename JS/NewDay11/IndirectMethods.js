// let a=document.getElementById("demo")
//  console.log(a);
//  a.style.border="2px solid"
//  a.style.backgroundColor="yellow"
//  console.dir(a);
//  a.children[0].textContent="web-tec"
//  a.children[1].textContent="python"
//  a.children[2].textContent="SQL"
//  a.children[0].style.color="red"
//  a.children[1].style.color="blue"
//  a.children[2].style.color="green"
// //  console.log(a.childNodes);
// //  a.childNodes[6].textContent="python"
//  //to add any other content

//  console.log(a.lastElementChild);
// console.log(a.lastElementChild.nextSibling);
// a.lastElementChild.nextSibling.textContent="java"


let b=document.getElementsByClassName("demo1")
console.log(b);
console.log(b[0]);
b[0].style.backgroundColor = "red";
b[1].textContent="react.js"

//-----------------------------------------------------------

let c=document.getElementsByTagName("ol");
console.log(c);
console.log(c[0].children);
c[0].children[2].style.border="2px solid";

console.log(c[0].children[2].parentElement.parentElement.parentElement.parentNode);
console.log(c[0].children[2].parentElement.nextElementSibling);

//=========================================================================

let d=document.getElementsByName("demo2");
console.log(d);
console.log(d[0]);
console.log(d[1]);

//==================================================

let e=document.querySelector("#demo");
console.log(e);
console.log(e.children[0]);
console.log(e.children[1]);
console.log(e.children[0].textContent="Shannu");

let f=document.querySelector(".demo1")
console.log(f);

//==================================================

let g=document.querySelectorAll("#demo");
console.log(g);
console.log(g[0].children[0]);

let m=document.querySelectorAll(".demo1");
console.log(m);
console.log(m[0]);
console.log(m[0].nextElementSibling);
