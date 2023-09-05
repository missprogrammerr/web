let form = document.reg_form;
let fullName = form.fullname;
let email = form.email;
let address = form.address;
let phone = form.phone;
//creating element with js
//let span = document.createElement("span");
//console.log(span);

form.addEventListener("submit", function(e){
    if(fullName.value == ''){
        //console.log("Fullname is required.");
        fullName.nextElementSibling.innerText = "Fullname is required.";
        //fullName.nextElementSibling.style.color = "red";
        e.preventDefault();
    }
    if(email.value == ''){
        email.nextElementSibling.innerText = "Email is required.";
        e.preventDefault();
    }
    if(address.value == ''){
        address.nextElementSibling.innerText = "Address is required.";
        e.preventDefault();
    }
    if(phone.value == ''){
        phone.nextElementSibling.innerText = "Phone is required.";
        e.preventDefault();
    }
});