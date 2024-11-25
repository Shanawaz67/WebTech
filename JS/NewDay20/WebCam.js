let click=document.querySelector("#click")
console.log(click);
console.log(window);

click.addEventListener("click",() => {
    let video=document.querySelector("#video")
    console.log(video);
    window.navigator.mediaDevices.getUserMedia(
        {audio:true,video:{height:400,width:800}}
    )
    .then((stream) => {
        video.srcObject=stream
        video.play()
    })
    .catch(() => {
        window.alert("Error Message")
    })
})