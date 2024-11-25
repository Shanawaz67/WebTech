let search=document.getElementById("search")
console.log(search);
let btn=document.getElementById("btn")
console.log(btn);

btn.addEventListener("click",() => {
    let inputValue=search.value;
    console.log(inputValue);
    let page=55;
    let main=document.getElementById("main")
    console.log(main);
    window.fetch(`https://pixabay.com/api/?key=38490858-78d4eee42221b318bed23d68d&q=${inputValue}&image_type=photo`)
    .then(res => res.json())
    .then((data) => {
        console.log(data.hits);
        for(let ele of data.hits){
            console.log(ele);
            console.log(ele.previewURL);
            let img= `<img src=${ele.previewURL} />`;
            main.innerHTML += img
        }
    })
})