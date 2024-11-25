let body=document.body
console.log(body);
console.log(body.children);
console.log(body.children[0]);

let a=body.children[0].firstElementChild
let b=body.children[0]
console.log(a);
console.log(a.children);
console.log(a.children);
console.log(body.children[0].firstChild);
console.log(b.firstElementChild.style.backgroundColor="red");
body.children[0].firstElementChild.textContent="support"
// lastChild & lastElementChild
console.log(b.lastElementChild.style.backgroundColor="yellow");
b.lastElementChild.textContent="wine"
console.log(b.lastChild);

// previous
console.log(body.children[2].previousElementSibling);
console.log(b.children[2].previousElementSibling.style.backgroundColor="green");
console.log(b.children[1].previousSibling);

//next
console.log(body.children[1].nextElementSibling);
console.log(b.children[1].nextElementSibling.textContent="msd");
console.log(b.children[2].nextSibling);

// how to make array
let bf=document.getElementsByTagName("ol")
console.log(bf);
console.log(Array.isArray(bf));

let ol1=Array.from(bf);
console.log(Array.isArray(ol1));

// task
console.log(body);
console.dir(body)
console.log(body.children[3].previousElementSibling)
let c=body.children[3].previousElementSibling;
console.log(c.children[0]);
console.dir(c.children[0]);
console.log(c.children[0].firstElementChild);
console.dir(c.children[0].firstElementChild);
console.log(c.children[0].children[0].firstElementChild);
console.log(c.children[0].children[0].children[0].nextElementSibling);
console.log(c.children[0].children[0].children[0].nextElementSibling.style.backgroundColor="green");
console.log(c.children[0].children[0].firstElementChild.style.backgroundColor="red");
let d=c.children[0].children[0].children[0].nextElementSibling;
console.log(d.nextElementSibling.style.backgroundColor="blue");
console.log(d.nextElementSibling)
console.log(d.nextElementSibling.children[0])
let e=d.nextElementSibling.children[0] ;
console.log(e.firstElementChild);
console.dir(e.firstElementChild);
console.log(e.firstElementChild.style.backgroundColor="orange");
console.log(e.firstElementChild.nextElementSibling.style.backgroundColor="yellow")
console.log(e.lastElementChild.style.backgroundColor="blue")
console.dir(c.children[1]);
console.dir(c.children[1].firstElementChild);
console.dir(c.children[1].firstElementChild.firstElementChild.style.backgroundColor="yellow");
console.dir(c.children[1].firstElementChild.firstElementChild.nextElementSibling.style.backgroundColor="red");
console.dir(c.children[1].firstElementChild.lastElementChild.style.backgroundColor="crimson");
console.log(body.children[4].previousElementSibling)
console.dir(body.children[4].previousElementSibling)
let f=body.children[4].previousElementSibling;
console.dir(f.firstElementChild);
let g=f.firstElementChild;
console.dir(g.firstElementChild);
let h=g.firstElementChild;
console.log(h.firstElementChild.style.backgroundColor="red");
console.log(h.firstElementChild.nextElementSibling.style.backgroundColor="green");
console.log(h.lastElementChild.style.backgroundColor="blue");


// console.log(c.children[0].nextElementChild.style.backgroundColor="green");
// console.dir[c];
// console.log(c);
// console.dir(c.children[0]);
// console.log(c.children[0]);
// console.log(c.children[0].children[0]);
// console.log(c.children[0].children[0].children[0].style.backgroundColor="red");
// console.log(c.children[0].children[0].children[1].style.backgroundColor="green");
// console.log(c.children[0].children[0].children[2].style.backgroundColor="blue");
// console.dir(c.children[0].children[0].children[2]);
// let d=c.children[0].children[0].children[2];
// console.log(d.children[0]);
// console.log(d.children[0]);