function validateForm() {
    let fn = document.forms["submit-form"] ["fname"].value;
    let ln = document.forms["submit-form"] ["lname"].value;
    let email = document.forms["submit-form"] ["email"].value;
    let phone = document.forms["submit-form"] ["phone_number"].value;
    let message = document.forms["submit-form"] ["message"].value;
    
    if(fn === null || fn === "") {
        alert("First name cannot be blank");
        return false;   
    }
    else if ( ln === null || ln === "") {
        alert("Enter Last name");
        return false;
    }
    else if ( email === null || email === "") {
        alert("Enter your Email");
        return false;
    }
    else if ( phone === null || phone === "") {
        alert("Enter the Phone Number");
        return false;
    }
    else if ( message === null || message === "") {
        alert("Enter Your Message");
        return false;
    }
}