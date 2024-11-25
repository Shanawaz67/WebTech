function demo(){
    let res=window.navigator.geolocation.getCurrentPosition((demo) => {
        console.log(demo);
        let {latitude,longitude}=demo.coords
        console.log(latitude,longitude);
        let maps=`https://www.google.com/maps/search/${latitude},${longitude}`
        console.log(maps);
    })
    console.log(res);
}
demo()