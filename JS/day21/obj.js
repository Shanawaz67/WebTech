// //literal way

// let obj={
//     name : 'abhi',
//     id : 1
// }
// console.log(obj);

// //constructor way
// function obj1(name,id){
//     this.name=name;
//     this.id=id;
// }

// let obj2=new obj1('anil',100)
// console.log(obj2);

// methods

let obj ={
    name : 'abhi',
    id : 1
}
console.log(obj);

// to print value
console.log(obj.name);

// to add new key and value pair

obj.designation="developer"

console.log(obj);

// to update a value

obj.name='anil'
console.log(obj);

// to delete key and value pair

delete obj.designation;
console.log(obj);

// to print keys

let obj1 = Object.keys(obj)
console.log(obj1);

// to print values

let obj2=Object.values(obj)
console.log(obj2);

// to concat to object

let obj3 ={
    designation : "tester"
}

let obj4= Object.assign(obj,obj3)
console.log(obj4);

// to convert object into array

let obj5= Object.entries(obj)
console.log(obj5);

obj5.map((x) => {
    console.log(x);
    console.log(x[0]);
    console.log(x[1]);
})

// seal
Object.seal(obj)

obj.place = 'goa'
console.log(obj);//we cannot add new key and value pair but exixting
//keys value can be updated

obj.id=100
console.log(obj);

//freeze

Object.freeze(obj)//we cannot do anything here we cannot create or update

obj.place ="goa"
console.log(obj);

obj.id=200
console.log(obj);
