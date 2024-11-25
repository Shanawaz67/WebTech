// console.log(window.navigator);
let but = document.getElementById("but")
console.log(but);


function get_location()
{
    console.log(window.navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        let {latitude,longitude}=position.coords
        console.log(latitude,longitude);
        let maps=`https://www.google.com/maps/place/${latitude},${longitude}`
        console.log(maps);
    }));
}
get_location()

// copy content
let btn = document.getElementById("btn")
console.log(btn);

btn.onclick=()=>{
    let text = document.getElementById("text").value
    console.log(text);
    window.navigator.clipboard.writeText(text)
    .then(() => {
        window.alert("ode copied")
    })
    .catch(() => {
        console.log("error occured");
    })
}

// ofline or online

if(navigator.online)
{
    document.write("online 😁")
}
else{
    document.write("offline 😢")
}

// media devices screen sharing

let btn = document.getElementById("btn")
console.log(btn);

btn.onclick = () => {
    window.navigator.mediaDevices.getDisplayMedia()
}

// video accessing

btn.onclick = () => {
    let video = document.getElementById('video')
    console.log(video);
    navigator.mediaDevices.getUserMedia({
        audio : true,
        video : {height : 500,width:500}
    })
    .then((stream) =>{
        video.srcObject=stream
        video.onplay()
    })
    .catch(() => {
        console.log("error occured");
    })
}