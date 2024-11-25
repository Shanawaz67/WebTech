console.log((null)?console.log(true):console.log(false));
console.log((0) ? true:false);
console.log((undefined) ? true:false);
console.log((NaN) ? true:false);
console.log((false) ? true:false);
console.log((-5) ? true:false);
console.log((5) ? true:false);
console.log((1) ? true:false);

//type-casting

//implcit type-casting

console.log(5+5);//10
console.log(5+'5');//55 num into string
console.log(5-'5');//0 string into num
console.log(5-5);//0
console.log(5*'5');//25
console.log(5-'a');//nan
console.log(typeof NaN);

//explict type -casting

//inbuilt functions/methods

console.log(typeof Number);
console.log(Number('5')+5);//10
console.log(String(5)+5);//5
console.log(Boolean(0));//false
console.log(Boolean(1));//ture
console.log(Boolean(undefined));//false
console.log(Boolean(54));//true
console.log(Boolean(NaN));//false