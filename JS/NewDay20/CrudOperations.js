let input=document.getElementById("input")
console.log(input);
let btn=document.getElementById("btn")
console.log(btn);
let br=document.createElement("br")
console.log(br);
document.body.appendChild(br)

btn.onclick=function(){
    span=document.createElement("span")
    console.log(span);
    document.body.appendChild(span)
    span.textContent=input.value

    b1=document.createElement("button")
    document.body.appendChild(b1)
    b1.textContent="Delete"
    console.log(b1);

    b2=document.createElement("button")
    document.body.appendChild(b2)
    b2.textContent="Edit"
    console.log(b2);

    br=document.createElement("br")
    document.body.appendChild(br)
    input.value=""
    console.log(br);

    b1.onclick=function(){
        span.style.display="none"
        b1.style.display="none"
        b2.style.display=`${input.value}`
    }
    b2.onclick=function(){
        let content = span.textContent
        input.value=content
        b2.textContent="Update"

        let update=b2
        update.onclick=function(){
            span.textContent=input.value
            input.value=`${input.value}`
            update.textContent="Edit"
        }
    }
}