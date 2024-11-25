let sum=document.getElementById("sum");
console.log(sum);
sum.onclick=function(e){
    e.preventDefault()
    let val1=document.getElementById("val1").value;
    console.log(val1);
    let val2=document.getElementById("val2").value;
    console.log(val2);
    let res=document.getElementById("res");
    console.log(res);
    //Check the input values to num
    var num1=parseFloat(val1);
    var num2=parseFloat(val2);
    //Check if the inputs are valid num's
    if(!isNaN(num1) && !isNaN(num2)){
        var sum1=num1 + num2;
        console.log(sum1);
        res.value=sum1;
    }else{
        res.value="Invalid input";
        console.log("Invalid input");
    }
}