let btn = document.getElementById("btn")
console.log(btn);

btn.onclick= (e) =>{
    e.preventDefault()
    let user = document.getElementById("user").value
    console.log(user);
    let password=document.getElementById("password").value
    console.log(password);
    window.localStorage.setItem(user , password)
    window.localStorage.setItem("user", user)
    window.localStorage.setItem("password", password)
    console.log(window.localStorage.getItem("user"));
}

document.cookie="user shanu"