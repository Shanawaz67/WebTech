let gp=document.getElementById("gp")
console.log(gp);

gp.addEventListener("click",(e) => {
    e.stopImmediatePropagation();
    e.target.style.backgroundColor="red"
    console.log("gp-clicked");
},false)

let parent=document.getElementById("parent")
console.log(parent);

parent.addEventListener("click",(e)=>{
    e.stopImmediatePropagation();
    e.target.style.backgroundColor="green"
    console.log("parent");
},false)

let child=document.getElementById("child")
console.log(child);

child.addEventListener("click",(e)=>{
    e.stopImmediatePropagation();
    e.target.style.backgroundColor="yellow"
    console.log("child");
},false)

let gp1=document.getElementById("gp1")
console.log(gp1);

gp1.addEventListener("click",(e) => {
    e.stopImmediatePropagation();
    console.log("gp1 clicked");
},false)