// 1st way
// function demo(){
//     console.log("Hello World");
// }

// // 2nd way

// let btn=document.getElementById("btn");
// console.log(btn);
//  btn.onclick = function(){
//     console.log("HEllo");
//  }

 //eg:1

//  let a=window.prompt("Enter any color-name");
// //  console.log(a);

// let btn1=document.getElementById("btn1");
// console.log(btn1);

// btn1.innerHTML=`${a}`;

// btn1.onmouseover = function(){
//     document.body.style.backgroundColor = `${a}`;
//     document.body.style.transition = "ease all 5s";
//     btn1.style.backgroundColor = `${a}`;
//     btn1.style.transition = "ease all 5s"
// }


//eg:2

// let btn2=document.querySelector("#btn2");
// console.log(btn2);

// btn2.onclick=function(){
//     let res=Math.round(Math.random() *10000).toString(16);
//     console.log(res);
//     document.body.style.backgroundColor =`#${res}`;
// }
// // let demo=document.querySelector("#demo")
// // console.log(demo);
// demo.onkeypress=function(){
//     let res=Math.round(Math.random() *10000).toString(16);
//     console.log(res);
//     document.body.style.backgroundColor =`#${res}`;
// }
// demo.onkeyup=function(){
//     let res=Math.round(Math.random() *10000).toString(16);
//     console.log(res);
//     document.body.style.backgroundColor =`#${res}`;
// }
// demo.onkeydown=function(){
//     let res=Math.round(Math.random() *10000).toString(16);
//     console.log(res);
//     document.body.style.backgroundColor =`#${res}`;
// }
// btn2.onmouseover=function(){
//     let res=Math.round(Math.random() *10000).toString(16);
//     console.log(res);
//     document.body.style.backgroundColor =`#${res}`;
// }
// btn2.onmouseenter=function(){
//     let res=Math.round(Math.random() *10000).toString(16);
//     console.log(res);
//     document.body.style.backgroundColor =`#${res}`;
// }

let v=document.querySelector("#video");
console.log(v);

v.onclick = function(){
    let v1=v.classList.toggle(true);
    if(v1){
        v.play();
    }
    else{
        v.pause();
    }
}

let btn4=document.getElementById("btn4");
console.log(btn4);
btn4.onclick = function(){
    let v1=btn4.classList.toggle(true);
    if(v1){
        v.play();
        btn4.innerHTML="Play";
    }
    else{
        v.pause();
        btn4.innerHTML="Pause"
    }
}
