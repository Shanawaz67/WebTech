// var a = 10;
// function parent() {
//     console.log(a);
// }
// parent()

// function parent1() {
//     let a =20;
//     function child() {
//         console.log(a);
//     }
//     child()
// }
// parent1()

function parent() {
    let a =10;
    function child() {
        console.log(a);
    }
    return child
}
parent()()

function parent1() {
    function child(params) {
        console.log("i am child");
        function child1() {
            console.log("i am child1");
        }
        return child1
    }
    return child
}
parent1()()()

function parent2() {
    function child1() {
        console.log("i am child1");
        function child1_1() {
            console.log("i am child1.1");
        }
        return child1_1
        
    }
    function child2() {
        console.log("iam child2");
    }
    return [child1,child2]
}
let res = parent2()
res[0]()()
res[1]()