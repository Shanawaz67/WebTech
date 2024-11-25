// Sum of an Array
let a=function demo(){
    let val1=[10,50,60,45,90.254]
    let sum=0
    for(let i=0;i<val1.length;i++){
        sum=sum+val1[i]
    }
    console.log(sum);
}
console.log(a());
console.log("******************");

// Avg of an Array
let a1=function demo(){
    let val1=[10,501,64,54,50.3]
    let sum=0
    let avg=0
    for(let i=0;i<val1.length;i++){
        sum=sum+val1[i]
        avg=sum/val1.length
    }
    console.log(sum);
    console.log(avg);
}
console.log(a1());
console.log("***************");

// first of an array
let a2=function demo(){
    let val1=[10,20,80,50.5,66.21]
    let sum=0,avg=0
    let arr=[]
    for(let i=0;i<val1.length/2;i++){
        console.log(val1[i]);
        arr.push(val1[i])
        sum=sum+val1[i]
    }
    console.log(sum);
    console.log(arr);
}
console.log(a2());
console.log("****************");

// Second of an array*****************
let a3=function demo(){
    let val1=[10,220.32,65,87,52.36]
    let arr=[]
    let ind=Math.floor(val1.length/2+1)
    for(let i=ind;i<val1.length;i++){
        console.log(val1[i]);
        arr.push(val1[i])
    }
    console.log(arr);
}
a3()
console.log("*****************");

// Avg of first half
let a4=function demo1(){
    let val1=[10,56,65.444,65.5,665]
    let arr=[]
    let sum=0,avg=0
    for(let i=0;i<val1.length/2;i++){
        sum=sum+val1[i]
        arr.push(val1[i])
    }
    avg=sum/(val1.length/2)
    console.log(sum);
    console.log(avg);
    console.log(arr);
}
console.log(a4());
console.log("**********");

// Avg of Second half*******************
let a5=function demo() {
    let val1=[10,5,20.3,56.3,10.23]
    let arr=[]
    let sum=0,avg=0
    let ind=Math.floor(val1.length/2+1)
    for(let i=ind;i<val1.length;i++){
        sum=sum+(val1[i])
        arr.push(val1[i])
    }
    avg=sum/(val1.length-val1.length-2)
    console.log(avg);
    console.log(sum);
    console.log(arr);
}
console.log(a5());
console.log("***********");


// Sorting the array
let val3=[10,45,8,6,94,32,45,25]
function sortingofarray(val3){
    let temp=0
    for(let i=0;i<val3.length;i++){
        for(let j=i+1;j<val3.length;j++){
            if(val3[i]>val3[j]){
                temp=val3[i]
                val3[i]=val3[j]
                val3[j]=temp
            }
        }
    }
    return val3
}
console.log(sortingofarray(val3));
console.log(sortingofarray(val3[0]));
// console.log(Math.floor(3.5));
console.log("*******************");

// Min value of an array
function minval(val3){
    let val4=sortingofarray(val3)
    return val3[0]
}
console.log(minval(val3));
console.log("**************");


// Max value of an array
function maxval(val3){
    let v4=sortingofarray(val3)
    return val3[val3.length-1]
}
console.log(maxval(val3));
console.log("*************");

// Sorting of double Number
let val5=[10.2,51.3,45.8,65.5,85.3,5]
function sortingarr(val5){
    let temp=0
    let ind=Math.floor(val5.length)
    for(let i=0;i<ind;i++){
        for(let j=i+1;j<ind;j++){
            if(val5[i]>val5[j]){
                temp=val5[i]
                val5[i]=val5[j]
                val5[j]=temp
            }
        }
    }
    return val5
}
console.log(sortingarr(val5));
console.log("*************");
// nthHightest value
let n=2
function nthhigh(val5,n){
    let val51=sortingarr(val5)
    return val5[val5.length-n]
}
console.log(nthhigh(val5,n));
console.log("*****************");

// nthMin value
function nthmin(val5,n){
    let val51=sortingarr(val5)
    return val5[n-1]
}
console.log(nthmin(val5,n));
console.log("****************");

// Avg of an odd index
function avgoddind(vla5){
    let val51=sortingarr(val5)
    let sum=0
    let avg=0
    if(val5%2==1){
        for(let i=1;i<ind;i+2){
            sum=sum+val5[i]
        }
        avg=sum/val5.length
        console.log(sum);
        console.log(avg);
    }
}
console.log(avgoddind(val5));