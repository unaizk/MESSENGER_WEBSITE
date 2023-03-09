var emailError = document.getElementById('email-error');
var passError = document.getElementById('pass-error');

function validateEmail(){
    var email = document.getElementById('exampleInputEmail1').value;

    if(email.lenth == 0){
        emailError.innerHTML = 'Email is required';
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validatePass(){
    var pass = document.getElementById('exampleInputPassword1').value;

    if(pass.length == 0){
        passError.innerHTML = 'Password is required';
        return false;
    }
    if(pass.length<8){
        passError.innerHTML = 'Need minimum 8 Characters';
        return false;
    }
    passError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateForm(){
    if(validateEmail ==0 || validatePass ==0){
        return false;
    }
}
