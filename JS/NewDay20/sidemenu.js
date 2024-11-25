let btn=document.querySelector("#btn")
console.log(btn);
btn.onclick=function(){
    let ol=document.querySelector("ol")
    console.log(ol);
    let res=ol.classList.toggle(true)
    if(res){
        ol.style.transform="translateX(-150px)"
        ol.style.transitionDuration="2s"
    }
    else{
        ol.style.transform="translateX(4px)"
        ol.style.transitionDuration="2s"
    }
}
let demo=document.getElementById("cross")
console.log(demo);
demo.onclick=function(){
    let ol=document.querySelector("ol");
    console.log(ol);
    ol.style.transform="translateX(-150px)"
    ol.style.transitionDuration="2s"
}