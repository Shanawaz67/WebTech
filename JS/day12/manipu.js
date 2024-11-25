let table=document.createElement("table")
console.log(table);
table.style.border="2px solid"
table.style.height="200px"
table.style.width="200px"
table.style.backgroundColor="red"


let tr1=document.createElement("tr")
let td1=document.createElement("td")
td1.textContent="1"
td1.style.border="2px solid"
td1.style.textAlign="center"
tr1.appendChild(td1)
let td2=document.createElement("td")
td2.textContent="2"
td2.style.border="2px solid"
td2.style.textAlign="center"
tr1.appendChild(td2)
td2.setAttribute("colspan","2")
// let td3=document.createElement("td")
// td3.style.border="2px solid"
// tr1.appendChild(td3)
let td4=document.createElement("td")
tr1.appendChild(td4)
td4.textContent="4"
td4.style.textAlign="center"
td4.style.border="2px solid"
table.appendChild(tr1)

let tr2=document.createElement("tr")
let td5=document.createElement("td")
td5.textContent="8"
td5.setAttribute("rowspan","2")
td5.style.textAlign="center"
td5.style.border="2px solid"
tr2.appendChild(td5)
let td6=document.createElement("td")
td6.style.border="2px solid"
td6.textContent="6"
td6.style.textAlign="center"
tr2.appendChild(td6)
let td7=document.createElement("td")
td7.style.border="2px solid"
td7.textContent="7"
td7.setAttribute("colspan","2")
td7.style.textAlign="center"
tr2.appendChild(td7)
// let td8=document.createElement("td")
// td8.style.border="2px solid"
// tr2.appendChild(td8)
table.appendChild(tr2)

let tr3=document.createElement("tr")
let td9=document.createElement("td")
// td9.style.border="2px solid"
// tr3.appendChild(td9)
let td10=document.createElement("td")
td10.textContent="10"
td10.style.textAlign="center"
td10.style.border="2px solid"
tr3.appendChild(td10)
let td11=document.createElement("td")
td11.textContent="11"
td11.style.textAlign="center"
td11.style.border="2px solid"
tr3.appendChild(td11)
let td12=document.createElement("td")
td12.textContent="12"
td12.style.textAlign="center"
td12.style.border="2px solid"
tr3.appendChild(td12)
table.appendChild(tr3)

let tr4=document.createElement("tr")
let td13=document.createElement("td")
td13.textContent="13"
td13.style.textAlign="center"
td13.style.border="2px solid"
tr4.appendChild(td13)
let td14=document.createElement("td")
td14.setAttribute("colspan","2")
td14.textContent="14"
td14.style.border="2px solid"
td14.style.textAlign="center"
tr4.appendChild(td14)
// let td15=document.createElement("td")
// td15.style.border="2px solid"
// tr4.appendChild(td15)
let td16=document.createElement("td")
td16.textContent="16"
td16.style.textAlign="center"
td16.style.border="2px solid"
tr4.appendChild(td16)
table.appendChild(tr4)

document.body.appendChild(table)