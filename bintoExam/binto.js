
// 3program
function str1(){
    let A="axy"
    let B="yadxcp"
    let f=0
    for(let i=0;i<=B.length;i++){
        if(A[f]==B[i]){
            f++
            if(A.length==f){
                break
            }
        }
    }
    if(A.length===f){
        console.log(true);
    }
    else{
        console.log(false);
    }
}
str1()

// 2program
function str2(str){
    
    for(let i=0;i<=str.length;i++){
        let char=str[i]
        if(str.indexOf(char)==i&&str.indexOf(char,i+1)==-1){
            return char
        }
    }
    return ""
}
console.log(str2(("geeksforgeeeks")));


// pogram1
function pattern5(){
    let space=4,num=-1;
    let star="";
  
    for(let i=0;i<=6;i++){
        let k=1;
        let l;
        if(i<=3){
            space--;
            num+=2;
        }
        else{
            space++;
            num-=2;
        }
        for(let j=1;j<=space;j++){
            star+=" "
        }
        for(let j=1;j<=num;j++){
            if(j<(num/2)) {
                l=k*k;
                if(l>9){
                    star+="0"
                }
                else{
                    star+=l
                }
                k++
        }
        else {
            l=k*k;
            if(l>9){
                star+="0"
            }
            else{
                star+=l
            }
            k--
    }
   
    }
    star+="\n"
    
}
console.log(star);
}
pattern5()

// program5
function str3(){
    str="Assetmonk"
    for(let i=0;i<=str.length;i++){
        
    }
    console.log(str);
}
str3()

// program4
function duplicates(){
    Array =[10,20,40,30,50,10,70,60,30,90,20,10,7,6,8,7,10]
    removeEventListener.Array
    console.log();
}

// function demo() {
//     const n = 7; // Total number of rows in the pattern
//     let pattern = "";

//     for (let i = 1; i <= n; i++) {
//         // Calculate the number of spaces before the numbers
//         const spaces = Math.abs(i - (n + 1) / 2);
        
//         // Calculate the starting number for each row
//         const startNum = i <= (n + 1) / 2 ? i : n - i + 1;

//         for (let j = 0; j < spaces; j++) {
//             pattern += "  "; // Add two spaces for formatting
//         }

//         for (let j = 1; j <= i; j++) {
//             const num = startNum * startNum;
//             pattern += (num < 10 ? "0" : "") + num + " "; // Add the squared number with padding
//             startNum++;
//         }

//         pattern += "\n"; // Move to the next line after each row
//     }

//     return pattern;
// }

// const result = demo();
// console.log(result);
