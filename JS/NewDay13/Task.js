
let but=document.getElementById("but");
console.log(but);
but.onclick=function(){
    let img=document.getElementById("img")
    console.log(img);
    let img1=but.classList.toggle(true);
    if(img1){
        img.style.visibility="visible"
        but.innerHTML="Display"
    }
    else{
        img.style.visibility="hidden"
        but.innerHTML="Disappear"
    }
}
