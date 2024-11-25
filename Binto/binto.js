function strings(){
    let A="axy"
    let B="agdxlky";
    let f=0;
    for(let i=0;i<B.length;i++){
        if(A[f]==B[i]){
            f++;
            if(A.length==f){
                break
            }
        }
    }
    if(f===A.length){
        console.log(true);
    }
    else{
        console.log(false);
    }
}
strings()
var myObject={
    foo:"bar",
    func:function(){
        var self=this;
        console.log("outer func: this.foo="+this.foo);
        console.log("outer func: self.foo="+self.foo);
        (function(){
            console.log("inner func: this.foo="+this.foo);
            console.log("inner func: self.foo="+self.foo);
        }());
    }
};
myObject.func();


// finding non repeating characters print first character of it
function nonrepeatingcharacter(str){
    for(let i=0;i<str.length;i++){
        let char=str[i]
        if(str.indexOf(char)==i&&str.indexOf(char,i+1)==-1){
            return char
        }
    }
    return ""
}
console.log(nonrepeatingcharacter("geeksforgeeks"));

// pattern5
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
            if(j<(num/2)){
                l=k*k;
                if(l>9){
                    star+="0"
                }
                else{
                    star+=l
                }
                k++
            }

        }
        star+="\n"
    }
    console.log(star);
}
pattern5()