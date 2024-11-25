// let range = document.getElementById("range")

// range.addEventListener("input",(e) => {
//     console.log(e.target.value);
// })

let btn=document.getElementById("btn")
console.log(btn);

btn.onclick=(e) => {
    e.preventDefault()
    let user = document.getElementById("user").value
    console.log(user);
    let mail = document.getElementById("mail").value
    console.log(mail);
    let password = document.getElementById("password").value
    console.log(password);
    let span = document.getElementsByTagName("span")
    console.log(span);
    if(user === "")
    {
        span[0].innerHTML="field should not be empty"
    }
    if(mail === ""){
        span[1].innerHTML="field should not be empty"
    }
    if(password === ""){
        span[2].innerHTML="field should not be empty"
    }
    window.location.reload()
}


let btn=document.getElementById("btn")
console.log(btn);

btn.onclick=()=>{
    let demo=document.getElementById("demo").value
    console.log(demo);
    let per_page=30
    window.fetch(`https://pixabay.com/api/?key=38490858-78d4eee42221b318bed23d68d&q=$(demo)&image_type=photo&pretty=true&per_page=${per_page}`)
    .then((x) => x.json())
    .then(x => {
        console.log(x);
        console.log(x.hits[0].pageURL);
        for(let ele of x.hits)
        {
            console.log(ele);
            console.log(ele.previewURL);
            let img = `<img src=${ele.previewURL}/>`
            console.log(img);
            let demo1=document.getElementById("demo1")
            demo1.inner += img
        }
    })
}