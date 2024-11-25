//Nested-Func's

//this keyword
console.log(window);
console.log(this);

var a=10;
let b=20;
function demo()
{
    var a="Hello-world";
    let b="java";
    console.log(a);
    console.log(b);
    console.log(this.a);//10
    console.log(this.b);//UD
}
demo()

//Nested Function

//scenario 1
function parent()
{
    let a=10;
    function child()
    {
        console.log(a);
    }
    return child
}
parent()()

//scenario 2

function parent1()
{
    function child()
    {
        console.log("I am child");
    }
    return child()
}
parent1()

//scenario 3

function parent2()
{
    function child1() 
    {
        console.log("I am child1");
    }
    function child2()
    {
        console.log("I am child2");
    }
    return [child1,child2];
}
let res=parent2();
res[0]()
res[1]()

//scenario 4

function parent3()
{
    function child1() 
    {
        console.log("I am child1...");
        function child1_1()
        {
            console.log("I am child1.1");
        }
        return child1_1;
    }
    function child2()
    {
        console.log("I am child2.....");
    }
    return [child1,child2];
}
let res1=parent3();
res1[0]()
res1[0]()()
res1[1]()

//scenario  5

function parent4()
{
    function child1(){
        console.log("I am child1 hello");
        function child1_1_1() {
            console.log("I am child 1.1.1");
        }
        return child1_1_1();
    }
    return child1();
}
parent4()

// const a11=10;
// const a11=20;