// //by using literal way

// let str="hello"
// console.log(str);
// console.log(typeof str);

// //by using new key word

// let str1= new String('Hello')
// console.log(str1);
// console.log(typeof str1);

// console.log(str.length);

// console.log(str.indexOf('o'));

// console.log(str.toLocaleUpperCase());

// console.log(str.toLocaleLowerCase());

// console.log(str.split(''));

// // console.log(str.split(' '));

// let str2="hello world"
// console.log(str2.split(" "));

// console.log(str2.split("/ "));

// console.log(str2.charAt(0));

// console.log(str2.charCodeAt(0));//UTF Code

// console.log(str.slice(0,3));

// console.log(str.slice(-4,-1));

// console.log(str.substring(0,3));

// // console.log(str.substring(-4,-1));

// console.log(str.substr(0,3));//deprecated

// console.log(str.startsWith('h'));

// console.log(str.endsWith('O'));

// console.log(str.repeat(4));

// let str4=" Shannu "
// console.log(str4.trim());

// console.log(str.concat(str4));

// console.log(str.split('').reverse().join(""));

let password=document.querySelector("#password")
console.log(password);

password.addEventListener("keyup",() => {
    let span=document.getElementById("span")
    console.log(span);
    let uppercase = /(?=.*?[A-Z])/
    let lowercase = /(?=.*?[a-z])/
    let digit=/(?=.*?[0-9])/
    let spc_char=/(?=.*?[#?!@$%^&*-])/
    span.innerHTML='';
    if(uppercase.test(password.value) === false){
        span.innerHTML += 'It should contain one uppercase'
    }
    else if(lowercase.test(password.value) === false){
        span.innerHTML += 'It should contain one lowercase'
    }
    else if(digit.test(password.value) === false){
        span.innerHTML += 'It should contain one digit'
    }
    else if(spc_char.test(password.value) === false){
        span.innerHTML += 'It should contain one special character'
    }
    else{
        span.innerHTML += 'Password Created'
    }
})