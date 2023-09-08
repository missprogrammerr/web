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
    //email validation with regex
    let email_pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let validate_email = email_pattern.test();
    if(validate_email == false){
        email.nextElementSibling.innerText = "Email is not valid.";
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

/**
 * basic email validation
 */
email.addEventListener("keyup",function(){
    if(this.value.indexOf('@')== -1) {
        this.nextElementSibling.innerText ="One'@' symbol is require" ;
    } else if(this.value.indexOf('@') != this.value.indexOf('@')){
        this.nextElementSibling.innerText ="Only one'@' symbol is require" ;
    } else if (this.value.indexOf('.') == -1){
        this.nextElementSibling.innerText ="At least one '.' symbol is require" ;
    }else {
        this.nextElementSibling.innerText = "";
    }
});

fullName.addEventListener("keyup", function(){
      let name_pattern = /([A-Z])\w+\s([A-Z])\w+/g;
      let validate_name = name_pattern.test(fullName.value);
      if(validate_name == false){
        this.nextElementSibling.innerText = "Full Name is not valid.";
      }else{
        this.nextElementSibling.innerText = "";
      }
});