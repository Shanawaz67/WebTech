let demo=document.getElementById("demo")
console.log(demo);

let demo1=document.getElementById("demo1")
console.log(demo1);

demo.onkeyup= function(){
    demo1.textContent=demo.value
}