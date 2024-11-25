let login = document.getElementById("login")
console.log(login);

login.onclick = function (){
    let model= document.getElementById("model")
    console.log(model);
    let section = document.getElementById("section")
    console.log(section);
    let res=model.classList.toggle(true)
    if(res){
        model.style.display="block"
        section[0].style.filter="blur(1.5px)"
    }
    else{
        model.style.display="none"
        section[0].style.filter="none"
    }
}

let section=document.getElementsByTagName("section")
console.log(section);
section[0].onclick=function(){
    let model = document.getElementById("model")
    console.log(model);
    model.style.display="none"
    section[0].style.filter="none"
}