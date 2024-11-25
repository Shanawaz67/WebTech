let speech = new SpeechSynthesisUtterance()
console.log(speech);

let btn=document.getElementById("btn")
console.log(btn);

btn.onclick=function(){
    let demo=document.getElementById("demo").value
    console.log(demo);
    speech.text=demo
    speechSynthesis.speak(speech)
}
