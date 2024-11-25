let form = document.forms
console.log(form);
form[0].style.backgroundImage="url(https://cdn.pixabay.com/photo/2024/02/08/07/34/ai-generated-8560465_960_720.jpg)";
console.dir(form[0])

form[0].onsubmit = (e) => {
    e.preventDefault()
    let name=form[0].children[0]
    console.log(name);
    let password=form[0].children[2]
    console.log(password);
    // console.log(form[0].children[0]);
    // console.log(form[0].children[2]);
    console.log(name.value , password.value);
    if(name.value=== "abhi" && password.value=== "abhi@123")
    {
        window.open("http://www.youtube.com")
    }else{
        window.alert("Error Message");
        //window.location.reload()
    }
}

//create a 2 html file 
// 1) login === it should consits of fields like text , password, submit & button
// 2) home.html it should contain fields like nav , background img
//1st prompt ("Enter your fav color")  Background color of a web page should get the given color............