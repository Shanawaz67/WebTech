let demo=document.querySelector("#demo")
console.log(demo);

demo.addEventListener("click",(e) => {
    if(e.target.tagName === "BUTTON"){
        console.log("Hello");
    }
})

let ol=document.querySelector("ol")
console.log(ol);

ol.addEventListener("click",(e) => {
    if(e.target.tagName==="LI"){
        console.log("world");
    }
})