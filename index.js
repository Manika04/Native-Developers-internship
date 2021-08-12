console.log("This is index.js")

var navbar = document.getElementById("navbar");
var container = document.getElementById("container");
const email = document.getElementById('email');
let validEmail = false;

window.onscroll = function(){
    if(window.scrollY > 0){
        navbar.style.backgroundColor="rgba(255, 225, 199, 0.7)";
        navbar.style.fontWeight="bold";
        for(let i = 0; i<container.length;i++ ){
            container[i].style.color = "black";
        }
    }
    else{
        navbar.style.backgroundColor="transparent";
        navbar.style.fontWeight="normal";
        for(let i = 0; i<container.length;i++ ){
            container[i].style.color = "black";
        }
    }
}

//Validating Email
console.log("validate email");

email.addEventListener('blur', ()=>{
    console.log("email is blurred");
    // Validate email here
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your email is valid');
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else{
        console.log('Your email is not valid');
        email.classList.add('is-invalid');
        validEmail = false;
    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log("You clicked on the button");

    // Subscribing 
    if(validEmail){
        console.log("Email is valid.");
        let success = document.getElementById('success');
        success.classList.add('show');
        failure.classList.remove('show');
    }
    else{
        console.log("Email is Invalid.");
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        success.classList.remove('show');
    }
    
})



