//number data-type

console.log(10);
console.log(typeof 10);
console.log(typeof -10);
console.log(typeof .5);
console.log(typeof -.5);

//String data-type

let s1='i am a developer';
console.log(s1);
console.log(typeof s1);

let s2="i'm a developer";
console.log(s2);
console.log(typeof s2);

let s3=`iam 
        a
            developer`;//template string to use for interpollation
console.log(s3);
console.log(typeof s3);

let a1=10;
let b1=20;
let c1=a1+b1;
console.log(c1);
console.log(`the sum of ${a1} and ${b1} = ${c1}`);

//boolean data-type

console.log(typeof true);
console.log(typeof false);

//un-defined data-type

let a;
console.log(a);
console.log(typeof a);

//null data-type

let b=null;
console.log(b);
console.log(typeof b);//object

//big-int data-type

let d=1n;
console.log(d);
console.log(typeof d);

//symbol data-type

let a2=Symbol()
console.log(a2);

let b2=Symbol();
console.log(b2);

console.log(a2==b2);//false

//type-casting

//implict-type-casting
console.log(5+5);
console.log(5+"5");
console.log(5-'5');
console.log(5*'5');
console.log(5+'a');
console.log(5-'a');
console.log(typeof NaN);

//explict-type-casting

console.log(5+Number('5'));
console.log(5+String(5));
console.log(Boolean(0));
console.log(Boolean(10));
console.log(Boolean(undefined));

//conditional operator

console.log(NaN?true:false);
console.log(undefined?true:false);
