let btn=document.getElementById("btn")
console.log(btn);

btn.addEventListener("click", ()=>{
    let ajax=new XMLHttpRequest()
    console.log(ajax);
    let demo=document.getElementById("demo")
    console.log(demo);

    ajax.open("GET","https://pixabay.com/api/videos/?key=38490858-78d4eee42221b318bed23d68d&q=yellow+flowers&pretty=true")
    console.log(ajax);

    ajax.onload=() => {
        console.log(ajax);
        console.log(ajax.status);
        console.log(ajax.response);
        let data=JSON.parse(ajax.response)
        console.log(data.hits);
        data.hits.map((res) => {
            console.log(res.videos.medium.url);
            let video=`
                <video src=${res.videos.medium.url}> </video>
            `
            document.body.innerHTML+=video
        })
    }

    ajax.send()
})

