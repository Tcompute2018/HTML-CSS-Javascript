
var myForm = document.getElementById('contact-form')
var email = document.getElementById('email')
var message = document.getElementById('message')
var form = document.getElementById('submit')
var name = document.getElementById('name')
myForm.onsubmit = function(e){
    e.preventDefault();
    console.log(myForm.name.value);
    console.log(myForm.email.value);
    console.log(myForm.message.value);
    myForm.reset();
}