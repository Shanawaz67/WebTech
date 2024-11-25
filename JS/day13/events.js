// function demo(){
//     console.log("hello world");
// }
// function otp()
// {
//     console.log();
//     setTimeout(()=>{
//         console.log(Math.floor(Math.random()*100));
//     },3000)
// }

// let color=document.getElementById("color")
// color.onkeydown=function(e)
// {
//     console.log(e);
//     console.log("hello-world");
//     console.log(e.key);
//     console.log(e.type);
//     console.log(e.target);
//     let red = Math.floor(Math.random()*255)
//     console.log(red);
//     let green = Math.floor(Math.random()*255)
//     console.log(green);
//     let blue = Math.floor(Math.random()*255)
//     console.log(blue);
//     document.body.style.backgroundColor=`rgb(${red},${green},${blue})`
// }

// let onmouse=document.getElementById("onmouseover")
// onmouse.onmouseover=function(e)
// {
//     let red = Math.floor(Math.random()*255)
//     console.log(red);
//     let green = Math.floor(Math.random()*255)
//     console.log(green);
//     let blue = Math.floor(Math.random()*255)
//     console.log(blue);
//     document.body.style.backgroundColor=`rgb(${red},${green},${blue})`
// }

// onmouse.onmouseleave=function (e) {
//     let red = Math.floor(Math.random()*255)
//     console.log(red);
//     let green = Math.floor(Math.random()*255)
//     console.log(green);
//     let blue = Math.floor(Math.random()*255)
//     console.log(blue);
//     document.body.style.backgroundColor=`rgb(${red},${green},${blue})`
// }

// let a = window.prompt("enter a color")
// let btn = document.getElementById("sub1")
// console.log(btn);

// btn.innerHTML = a

// btn.onmouseover=function()
// {
//     document.body.style.backgroundColor=`${a}`
//     document.body.style.transition=`ease all 4s`
// }

// let btn=document.getElementById("sub1")
// console.log(btn);

// btn.onclick=function(){
//     let img=document.getElementById("img")
//     console.log(img);

//     if(img){
//         img.style.display="none"
//     }
//     else{
//         img.style.display="block"
//     }
// }

let ol = document.getElementsByTagName("ol")
console.log(ol);
console.log(ol[0]);
console.log(ol[0].children);
console.log(ol[0].children[1]);

let main = document.getElementsByTagName("main")
console.log(main);
console.log(main[0]);

ol[0].children[1].onclick=()=>{
    let main = document.getElementsByTagName("main")
    console.log(main);
    console.log(main[0]);
    let aside=document.getElementsByTagName("aside")
    console.log(aside[0]);
    let display= aside[0].classList.toggle(flase)
    if(display){
        aside[0].style.display="block"
        main[0].style.filter="blur(5px)"
    }
    else{
        aside[0].style.display="none"
        main[0].style.filter="none"
    }
}

main[0].onclick=()=>{
    let aside = document.getElementsByTagName("aside")
    console.log(aside[0]);
    let display=aside[0].classList.toggle(true)
    if(display){
        aside[0].style.display="none"
        main[0].style.filter="none"
    }
}

let btn=document.getElementById("btn")
console.log(btn);

btn.onclick=()=>{
    let ol = document.getElementsByTagName("ol")
    console.log(ol);
    let display=ol[0].classList.toggle(true)
    if(display)
    {
        ol[0].style.transform="translate(-100px)"
        ol[0].style.transitionDuration="5s"
    }
    else{
        ol[0].style.transform="translate(0px)"
        ol[0].style.transitionDuration="5s"
    }
}

let video=document.getElementsByTagName("video")
console.log(video);

video[0].onclick=() => {
    let display=video[0].classList.toggle(true)
    if(display)
    {
        video[0].play()
    }
    else{
        video[0].pause()
    }
}

let btn=document.querySelector("#btn")
console.log(btn);

btn.onclick = () => {
    let display = video[0].classList.toggle(true)
    if(display)
    {
        video[0].play()
        btn.textContent="play"
    }
    else{
        video[0].pause()
        btn.textContent="pause"
    }
}

let date = new date()
console.log(date);
console.log(typeof data);
console.log(date.getTime());
console.log(date.getHours());
console.log(date.getDay());
console.log(date.getFullYeat());
console.log(date.getMonth());