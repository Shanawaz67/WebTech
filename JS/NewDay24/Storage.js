let demo=document.getElementById("demo")
console.log(demo);

demo.addEventListener("submit",(e) => {
    e.preventDefault()
    let name= document.getElementById("name")
    console.log(name);
    let password=document.getElementById("password")
    console.log(password);
    let span =document.getElementsByTagName("span")
    console.log(span);
    // if(name.value === ""){
    //     span[0].style.visibility="visible"
    // }else if(password.value === "")
    // {
    //     span[1].style.visibility="visible"
    // }

    // window.localStorage.setItem("name",name.value)
    // window.localStorage.setItem("password",password.value)
    // console.log(localStorage.getItem("name"));

    window.sessionStorageStorage.setItem("name",name.value)
    window.sessionStorageStorage.setItem("password",password.value)
    console.log(sessionStorageStorage.getItem("name"));
})