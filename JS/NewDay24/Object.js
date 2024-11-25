// //By using literal Way

// let obj={
//     name: "abhi",
//     id : 10,
//     boolean : true,
//     null : null,
//     undefined : undefined,
//     bigint : 10n,
//     arr : [10,20,30],
//     obj1 :{
//         designation : "developer"
//     },
//     demo : function(){
//         console.log("hello");
//     }
// }
// console.log(obj);
// console.log(obj.demo);
// console.log(obj.demo());
// console.log(obj.arr);
// console.log(obj.bigint);
// console.log(obj.name);

// //By using constructor function

// function obj2(name,id)
// {
//     this.name =name;
//     this.id=id;
// }
// let p1=new obj2("anil",100)
// console.log(p1);
// console.log(p1.name);
// console.log(p1.id);


//Object Methods

let obj={
    name : "anil",
    id : 1
}
console.log(obj);

//Update Existing values

obj.id=100
console.log(obj);

//Add new Key and Value Pair

obj.designation="Developer"
console.log(obj);

//Delete key and value pair

delete obj.designation
console.log(obj);

//Assign To concat two object

let obj1={
    location:"Hyderabad"
}
console.log(obj1);

Object.assign(obj,obj1)
console.log(obj);

//Entries convert object into a array methods

let obj2=Object.entries(obj)
console.log(obj2);

//seal()

// Object.seal(obj)
// console.log(Object.isSealed(obj));

// obj.id="1000"
// console.log(obj);

//freeze

Object.freeze(obj)
console.log(Object.isFrozen(obj));

obj.last_name="kumar"
console.log(obj);

obj.name="abhi"
console.log(obj);

console.log(Object.keys(obj));
console.log(Object.values(obj));