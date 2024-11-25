let a=document.body
console.log(a);
a.innerHTML +="<h1> Hello dude </h1>";
//a.innerHTML =" ";//over Rides when it will passes
a.innerHTML +=" "

let b=document.querySelector("div");
console.log(b);
b.style.border="2px solid";
b.innerHTML+=`<ol>
<li>java</li>
<li>java-script</li>
</ol>`

//createElement Methods

let h2=document.createElement("h2");
console.log(h2);

h2.textContent = "hello-world";
document.body.appendChild(h2);

let div=document.getElementById("demo");
console.log(div);

let ol=document.createElement("ol");
console.log(ol);

div.append(ol);

let li1=document.createElement("li");
console.log(li1);
li1.textContent="java-script";
ol.appendChild(li1)

let li2=document.createElement("li");
console.log(li2);
li2.textContent="sql";
ol.append(li2);
ol.setAttribute("type","A");


//Task-------------------------------------------

let table=document.createElement("table");
console.log(table);
table.setAttribute("style","border:2px solid");
table.setAttribute("height","500px")
table.setAttribute("width","500px")
table.setAttribute("align","center")
table.setAttribute("cellpadding","20px")
table.setAttribute("cellspacing","20px")
let tr1=document.createElement("tr");
console.log(tr1);
table.appendChild(tr1)
let td11=document.createElement("td");
tr1.appendChild(td11)
td11.textContent="A";
td11.style.border="2px solid";
let td12=document.createElement("td");
tr1.appendChild(td12)
td12.textContent="B";
td12.style.border="2px solid";
let td13=document.createElement("td");
tr1.appendChild(td13)
td13.textContent="C";
td13.style.border="2px solid";

let tr2=document.createElement("tr");
console.log(tr2);
table.appendChild(tr2);
// table.appendChild(tr1)
let td21=document.createElement("td");
tr2.appendChild(td21)
td21.textContent="D";
td21.style.border="2px solid";
let td22=document.createElement("td");
tr2.appendChild(td22)
td22.textContent="E";
td22.style.border="2px solid";
let td23=document.createElement("td");
tr2.appendChild(td23)
td23.textContent="F";
td23.style.border="2px solid";

let tr3=document.createElement("tr");
console.log(tr3);
table.appendChild(tr3);
table.appendChild(tr3)
let td31=document.createElement("td");
tr3.appendChild(td31)
td31.textContent="G";
td31.style.border="2px solid";
let td32=document.createElement("td");
tr3.appendChild(td32)
td32.textContent="H";
td32.style.border="2px solid";
let td33=document.createElement("td");
tr3.appendChild(td33)
td33.textContent="I";
td33.style.border="2px solid";
a.appendChild(table);