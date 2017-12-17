function validateRegisteration() {
    var username = document.forms["registerationForm"]["username"].value;
    // var email = document.forms["registerationForm"]["email"].value;
    var password = document.forms["registerationForm"]["password"].value;
    var passwordconfirmation = document.forms["registerationForm"]["passwordconfirmation"].value;
    var errorSpan = document.getElementById("error-register");

    if(username.length <4) {
        errorSpan.innerHTML = "<div class=\"alert alert-danger\" role=\"alert\">Username's length must be greater than or equal to 4 characters!</div>"
        return false;
    } else if(password.length < 8) {
        errorSpan.innerHTML = "<div class=\"alert alert-danger\" role=\"alert\">Password's length must be greater than or equal to 8 characters!</div>";
        return false;
    } else if(password != passwordconfirmation) {
        errorSpan.innerHTML = "<div class=\"alert alert-danger\" role=\"alert\">Passwords do not match!</div>";
        return false;
    }
}

function validateLogin() {
    var email = document.forms["loginForm"]["email"].value;
    var password = document.forms["loginForm"]["password"].value;
    var errorSpan = document.getElementById("error-login");
    //TODO INCREASE SECURITY HERE
    if(password.length < 8) {
        errorSpan.innerHTML = "<div class=\"alert alert-danger\" role=\"alert\">Password's length must be greater than or equal to 8 characters!</div>";
        return false;
    }
}