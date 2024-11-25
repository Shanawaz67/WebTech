let a=document.forms
console.log(a);
let ch1=a[0].children[0];
console.log(ch1);
let ch2=a[0].children[2];
console.log(ch2);
let tab=document.createElement("table");
console.log(tab);
document.body.appendChild(tab);
tab.style.border="2px solid";
let sub1=document.getElementById("sub1");
console.log(sub1);
sub1.onsubmit =(e) => {
    e.preventDefault()
    let tr=document.createElement("tr");
    tab.appendChild(tr);
    let td1=document.createElement("td");
    tr.appendChild(td1)
    td1.style.border=" 2px solid";
    td1.textContent=ch1.value;
    let td2=document.createElement("td");
    tr.appendChild(td2);
    td2.style.border="2px solid";
    td2.textContent=ch2.value;
}