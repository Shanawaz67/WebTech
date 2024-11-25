let a=document.getElementById("demo")
console.log(a);
console.dir(a);
a.style.border="2px solid"
a.style.backgroundColor="red"

console.log(a.children);
console.log(a.children[0]);
a.children[0].textContent="support"
a.children[0].style.color="yellow"

let b=document.getElementsByClassName("demo1")
console.dir(b);
console.log(b);
console.log(b[0]);
b[0].style.border="2px solid"
b[0].style.height="150px"
b[0].children[0].style.border="2px solid red"
b[0].children[0].style.height="50px"
b[0].children[0].style.width="50px"
b[0].children[0].style.margin="auto"
b[0].children[0].style.marginTop="50px"

b[1].style.border="2px solid"
b[1].style.height="150px"
b[1].textContent="hello"

let c=document.getElementsByTagName("ol")
console.log(c);
c[0].style.width="400px"
c[0].children[2].style.backgroundColor="blue"

let d=document.getElementsByName("demo2")
console.log(d);
console.log(d[0]);
console.log(d[1]);

let e=document.querySelector("#demo")
console.log(e);

let f=document.querySelector(".demo1")
console.log(f);

let g=document.querySelector("*")
console.log(g);

let h=document.querySelector("#demo")
console.log(h);
console.log(h[0]);

let l=document.querySelectorAll(".demo1")
console.log(l);

let j=document.querySelectorAll("*")
console.log(j);
console.log(j[1]);