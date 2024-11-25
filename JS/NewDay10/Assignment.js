let a=String(prompt("Enter the color:"));
let form = document.forms;
let a1=document.getElementById("demo");
console.log(form);
console.dir(form[0]);
console.log(document.getElementsByTagName('button').innerText);
console.log(a1.children[0].textContent=`${a}`);

form[0].onclick = (e) => {
    e.preventDefault();
    let color=form[0].children[0];
    console.log(color);

    document.body.style.backgroundColor=`${a}`
}