// (function(){
//     console.log("hello world");
// })()

// (function(){
//     console.log("hello");
// })()

// let demo=(function(){
//     console.log("hello");
// }
// )()

// ((a,b) => {
//     console.log(a+b);
// })(10,10)


// var a = 10;
// function demo(){
//     console.log(this.a);
// }
// demo()

// let b=20;
// function demo1(){
//     console.log(b);
// }
// demo1()

(
    ()=>{
        var a = 10;
        function demo()
        {
            console.log(a);
        }
        demo()
        let b = 20;
        function demo1(){
            console.log(b);
        }
        demo1()
    }
)()