var myForm = document.getElementById('contact-form')
var email = document.getElementById('email')
var userName = document.getElementById('username')
var passWord = document.getElementById('passWord')
var confirmPassword = document.getElementById('confirmPassword')

myForm.onsubmit = function(e){
    e.preventDefault();
    console.log(myForm.username.value);
    console.log(myForm.email.value);
    console.log(myForm.passWord.value);
    myForm.reset();
    
}
