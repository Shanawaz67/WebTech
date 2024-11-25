let p=document.querySelector("#p")
console.log(p);
p.addEventListener("click",(e) => {
    console.log(e.target);
    console.log("parent clicked");
    e.target.style.backgroundColor="red"
},false)

let c1=document.querySelector("#c1")
console.log(c1);
c1.addEventListener("click",(e) => {
    console.log(e.target);
    e.stopImmediatePropagation()
    console.log("child clicked");
    e.target.style.backgroundColor="green"
},false)

let c2=document.querySelector("#c2")
console.log(c2);
c2.addEventListener("click",(e) => {
    console.log(e.target);
    e.stopImmediatePropagation()
    console.log("child2 clicked");
    e.target.style.backgroundColor="blue"
},false)