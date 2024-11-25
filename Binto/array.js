let arr=[10,20,40,20,5,3,10,7,8,7]
let arr1=[10,20.53,19n,"hello","*"]

function sumofarray(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i]
    }
    return sum;
}
console.log(sumofarray(arr));
console.log("***********");
function averageofarray(arr){
    let sum=sumofarray(arr)
    let avg=sum/arr.length;
    return avg;
}
console.log(averageofarray(arr));
console.log("***********");
function Firsthalf(arr){
    let a=[];
    for(let i=0;i<arr.length/2;i++){
        a.push(arr[i])
    }
    return a;
}

console.log(Firsthalf(arr));
console.log("***********");
function secondhalf(arr){
    let a=[]
    for(let i=arr.length/2+1;i<arr.length;i++){
        a.push(arr[i])
    }
    return a
}
console.log(secondhalf(arr));
console.log("***********");
function avgoffirsthalf(arr){
    let sum=0;
    let avg=0
    for(let i=0;i<arr.length/2;i++){
        sum+=arr[i]
    }
    avg=sum/arr.length/2
    return avg
}
console.log(avgoffirsthalf(arr));
console.log("***********");
function avgofsecondhalf(arr){
    let sum=0
    let avg=0;
    for(let i=arr.length/2+1;i<arr.length;i++){
        sum+=arr[i]
    }
    avg=sum/(arr.length-arr.length/2)
    return avg
}
console.log(avgofsecondhalf(arr));
console.log("***********");
function sortingofarray(arr){
    arr=duplicates(arr)
    for(let i=0;i<arr.length;i++){
        // let m=i
        // console.log("hai");
        for(let j=0;j<arr.length;j++){
            if(arr[i]<arr[j]){
                let temp=arr[i]
                arr[i]=arr[j]
                arr[j]=temp
            }
        }
        // let temp=arr[m]
        // arr[m]=arr[i]
        // arr[i]=temp;
    }
    return arr;
}

console.log(sortingofarray(arr));
console.log("***********");
function minelement(arr){
    let arr1=sortingofarray(arr)
    return arr1[0];
}
console.log(minelement(arr));
console.log("*************");
function maxelement(arr){
    let arr1=sortingofarray(arr)
    return arr1[arr1.length-1];
}
console.log(maxelement(arr));
console.log("***************");
function duplicates(arr){
    let a=[]
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[i]==arr[j] && i>j){
                break
            }
            if(arr[i]==arr[j]){
                a.push(arr[i])
                break
            }

        }
    }
    return a
}

function nthlowest(arr,n){
    arr=sortingofarray(arr)
    return arr[n-1]
}
console.log(nthlowest(arr,2));
console.log("***************");

// console.log("hai");
// console.log(duplicates(arr));

function nthhighest(arr,n){
    arr=sortingofarray(arr)
    return arr[arr.length-n]
}
console.log(nthhighest(arr,2));
console.log("***************");





