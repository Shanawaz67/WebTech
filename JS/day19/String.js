// // by using a literal way

// let str ="hello"
// console.log(str);//hello

// // by using a new keyword

// let str1 = new String("hello")
// console.log(str1);

// //string constructor

// let str2= String("hello")
// console.log(str2);

// //methods

let str="hello"
console.log(str);
console.log(str.length);

console.log(str.charAt(0));
console.log(str.charCodeAt(0));
console.log(str.toUpperCase());
console.log(str.toLowerCase());

//tolocalupperCase and tolocallowercase are used for another languages

console.log(str.indexOf('h'));
console.log(str.startsWith('h'));
console.log(str.endsWith('e'));
console.log(str.repeat(5));
console.log(str.includes('o'));//boolean value only that char includes in that statement or not it checks
console.log(str.split(''));
let str1="hello world"
console.log(str1.split(' '));
console.log(str1.split('$ '));
console.log(str1.slice(0,5));
console.log((str1.slice(-6,-1)));
console.log(str1.substring(0,5));
// console.log(str1.substring(-5,-4));
console.log(str1.substr(0,5));
// console.log(str1.substr(-5,-2));
console.log(str.concat(str1));
console.log(str1.replace('world','shanu'));


let str3= " hello";
console.log(str3);
console.log(str3.trim());
console.log(str3.padStart());
console.log(str3.padEnd());

// for(let i=0;i<str3.length;i++){
//     console.log(i);
//     console.log(str3[i]);
// }

for(let ele in str3){//gives only index values
    console.log(ele);
}
for(let ele1 of str3){//gives only values
    console.log(ele1);
}

let str4 = str3.split('')
console.log(str4);

str4.forEach((value,index)=> {//hof
    console.log(`${value} ==== ${index}`);
}) 