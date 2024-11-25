let img = document.images;
console.log(img);

// console.log(Array.isArray(img));

// let a=Array.from(img);
// console.log(a);
// console.log(Array.isArray(a));

// console.log(img[0]);

for(let i=0;i<img.length;i++){
    console.log(img[i]);
    img[i].style.height="300px";
    img[i].style.width="300px";
    img[i].style.borderRadius="100%";
    img[i].setAttribute("alt","demo");
    // img[i].getAttribute("alt");
}