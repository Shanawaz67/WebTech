let gp=document.querySelector("#gp")
console.log(gp);
gp.addEventListener("click",(e) => {
    console.log("gp clicked");
    console.log(e.target);
    e.target.style.backgroundColor="yellow"
    e.stopImmediatePropagation()
},false);

let p=document.querySelector("#p")
console.log(p);
p.addEventListener("click",(e) => {
    console.log("p clicked");
    console.log(e.target);
    e.target.style.backgroundColor="red"
    e.stopImmediatePropagation()
},false);

let c=document.querySelector("#c")
console.log(c);
c.addEventListener("click",(e) => {
    console.log("c clicked");
    console.log(e.target);
    e.target.style.backgroundColor="orange"
    e.stopImmediatePropagation()
},false);