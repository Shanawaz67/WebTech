// Sum of an array
let sum=0
let obj=[10,20.53,parseInt(19n),"hello","*"]
let obj1=[10,20,85,92,74,62]
for(let i=0;i<=obj.length;i++){
    sum=sum+obj1[i]
}
console.log(sum);

// Avg of an Array
let sum1=0
let avg=0
// let obj2=[10,20.53,parseInt(19n),"hello","*"]
let obj3=[10,20,85,92,74,62]
for(let i=0;i<=obj3.length;i++){
    sum1=sum1+obj3[i]
    
}
avg= sum1/(obj3.length)
console.log(sum1);
console.log(avg);

// first half of an array
let sum2=0
let a=[]
let val1=[10,20,66.4,55.6]
for(let i=0;i<(val1.length)/2;i++){
    sum2=sum2+val1[i]
    console.log(val1[i])
    console.log(a[i]);
    // a.push(val1[i])
    // console.log(a);
    a[i]=val1[i]
}
console.log(sum2);
console.log(a);

// second half of an array
let val2=[10,20.53,19n,"hello","*"]
let a1=[]
for(let i=val2.length/2;i<val2.length;i++){
    a1.push(val2[i])
}
console.log(a1);


// Avg of first half
function p1(){
    let a=[10,20,30.65,85,90.254,10]
    let sum=0
    let avg=0
    let a1=[]
    for(let i=0;i<a.length/2;i++){
        sum=sum+a[i]
        a1[i]=a[i]
    }
    avg=sum/(a.length/2)
    console.log(sum)
    console.log(avg);
    console.log(a1);
}
p1()


// Avg of second half
function p2(){
    let a=[10,20,30.65,85,90.254,10]
    let sum=0
    let avg=0
    let a1=[]
    for(let i=a.length/2;i<a.length;i++){
        sum=sum+a[i]
        a1.push(a[i])
    }
    avg=sum/(a.length)
    console.log(sum)
    console.log(avg);
    console.log(a1);
}
p2()

// Min value of an array
function p3(){
    let a=[10,20,30.65,85,90.254,1]
    let arr=[]
    for(let i=0;i<a.length;i++){
        for(let j=i+1;j<a.length;j++){
            if(a[i]>a[j]){
                let temp=a[i]
                a[i]=a[j]
                a[j]=temp

            }
        }
    console.log(arr[i])
        
    }
    console.log(a[0])
}
p3()