function demo(a, ...b){
    console.log(a);
    console.log(b);
    console.log(b[2]);
}
demo(10,20,30,40)

let str="hello"
console.log(str);
console.log(...str);
console.log([...str]);

let arr=[10,20,30,40]
console.log(arr);
console.log(...arr);
console.log([...arr]);

//Object de-structuring

let obj = {
    name : "abhi",
    id : 1
}
console.log(obj);

let {name} = obj
console.log(name);

let {id , roll_num="msg not found"} = obj
console.log(id);
console.log(roll_num);

let arr1= [10,20,30]
console.log(arr1);
let [a,b] = arr1
console.log(a);
console.log(b);

//Array Destructuring

let arr2=[10,20,30]
console.log(arr2);

let [a1 , b1] = arr1
console.log(a1);
console.log(b1);

//Rest-Parameter

let{...c}=obj
console.log(c);
console.log(c.name);
console.log(c.id);
console.log(c.roll_num);

//Spread-Operator

let m=[10,20,30]
console.log(m);

let n=m
//Shalow Copy
console.log(n);
m[3]=40
console.log(m);
console.log(n);

//Deep Copy

let arr3=[10,20,30]
console.log(arr3);

let arr4 =[...arr3]
console.log(arr4);

arr3[3]=50
console.log(arr3);
console.log(arr4);