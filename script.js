const form = document.getElementById("form");
const gender = document.getElementById("gender");
var fField = document.getElementById("F-feild");
var flable = document.getElementById("f-label");
var ferror = document.getElementById("f-error");
var lFeild = document.getElementById("L-feild");
var llable = document.getElementById("L-label");
var lerror = document.getElementById("L-error");
var emailFeild = document.getElementById("email-feild");
var emaillable = document.getElementById("email-lable");
var emailerror = document.getElementById("email-error");
var pFeild = document.getElementById("p-feild");
var plable = document.getElementById("p-label");
var perror = document.getElementById("phone-error");
var addFeild = document.getElementById("add-felid");
var addlabel = document.getElementById("add-label");
var adderror = document.getElementById("add-error");
var selectFeild = document.getElementById("select-felid");
var selectlabel = document.getElementById("select-label");
var selecterror = document.getElementById("select-error");
var pinFeild = document.getElementById("pin-feild");
var pinlable = document.getElementById("pin-lable");
var pinerror = document.getElementById("pin-error");
var disFeild = document.getElementById("dis-feild");
var dislable = document.getElementById("dis-label");
var diserror = document.getElementById("dis-error");

function validatefname(){
    if(fField.value === ""){
       ferror.innerHTML = "please enter the name";
       fField.style.borderColor = "red";
       return false;
    }

    else if(fField.value.length < 4 || fField.value.length > 15){
       ferror.innerHTML = "character of the name min 4 and max 15";
       fField.style.borderColor = "red";
       return false;
    }

    else{
       ferror.innerHTML = "";
       fField.style.borderColor = "green";
       return true;
    }
}


function validatelname(){
    if(lFeild.value === ""){
       lerror.innerHTML = "please enter the second name";
       lFeild.style.borderColor = "red";
       return false;
    } 

    else if(lFeild.value.length < 4 || lFeild.value.length > 15){
       lerror.innerHTML = "characters min 4 to max 15";
       lFeild.style.borderColor = "red";
       return false;
    }

    else{
       lerror.innerHTML = "";
       lFeild.style.borderColor = "green";
       return true;
    }
}

function validateEmail(){
    if(emailFeild.value === ""){
       emailerror.innerHTML = "please enter the email";
       emailFeild.style.borderColor = "red";
       return false;
    }

    else if(!emailFeild.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
       emailerror.innerHTML = "please enter valid email";
       emailFeild.style.borderColor = "red";
       return false;
    }

    else{
       emailerror.innerHTML = "";
       emailFeild.style.borderColor = "green"; 
       return true;
    }
}

function validatephone(){
   if(pFeild.value === ""){
       perror.innerHTML = "please enter the number";
       pFeild.style.borderColor = "red";
       return false;
   }

   else if((isNaN(pFeild.value) || pFeild.value.length < 10 || pFeild.value.length > 10 )){
       perror.innerHTML = "please enter the valid phone number";
       pFeild.style.borderColor = "red";
       return false;
   }

   else{
       perror.innerHTML = "";
       pFeild.style.borderColor = "green";
       return true;
   }
}

function validateaddress(){
   if(addFeild.value === ""){
       adderror.innerHTML ="address cannot be blank";
       addFeild.style.borderColor = "red";
       return false;
   }

   else if(!addFeild.value.match(/^[a-z A-Z 0-9.]*$/)){
       adderror.innerHTML ="address cannot be valid";
       addFeild.style.borderColor = "red";
       return false;
   }
   
   else{
       adderror.innerHTML ="";
       addFeild.style.borderColor = "green";
       return true;
   }
}

function validateselect(){
   if(selectFeild.value === "-1"){
       selecterror.innerHTML = "select your state";
       selectFeild.style.borderColor = "red";
       return false
   }

   else{
       selecterror.innerHTML = " ";
       selectFeild.style.borderColor = "green";
       return true;
   }
}


function validatepin() {

   if(pinFeild.value === ""){
       pinerror.innerHTML = "select your state"; 
       pinFeild.style.borderColor = "red";
       return false;
   }

   else if(pinFeild.value.length > 6 || pinFeild.value.length > 6){
       pinerror.innerHTML = "maximum  6 digits";
       pinFeild.style.borderColor = "red";
       return false;
   }

   else{
       pinerror.innerHTML = "";
       pinFeild.style.borderColor = "green";
       return true;
   }
 
}

function validatedis(){
       if(disFeild.value === ""){
           diserror.innerHTML = "district cannot be blank";
           disFeild.style.borderColor = "red";
           return false; 
       }

       else if(!disFeild.value.match(/^[a-z A-Z]*$/)){
           diserror.innerHTML = "enter district only alpha"; 
           disFeild.style.borderColor = "red";
           return false;
       }

       else{
           diserror.innerHTML = ""; 
           disFeild.style.borderColor = "green";
           return true;
       }
}


form.addEventListener('submit',e=>{
     e.preventDefault();
     checkinput();
});

function checkinput() {
    const fristname = fField.value.trim();
    const Lnamevalue = lFeild.value.trim();
    const emailvalue = emailFeild.value.trim();
    const phonevalue = pFeild.value.trim();
    const gendervalue = document.formmy.gender.value;
    const addressvalue = addFeild.value.trim();
    const selectvalue = selectFeild.value.trim();
    const pincodevalue = pinFeild.value.trim();
    const disvalue = disFeild.value.trim();

    var gender = form.querySelectorAll('input[name="gender"]:checked');
    if (!gender.length) {
        alert('select Gender');
        return false;
    }

    var checkboxes = document.getElementsByName('checkd');
    var langu = "";
    var n = 0;
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            langu += checkboxes[i].value + "" + " ";
            n++;
        }
    }
    if (n == 0) {
        alert('select language');
        return false;
    }


   
    document.write("Frist Name:" + fristname + "<br>");
    document.write("Last Name:" + Lnamevalue + "<br>");
    document.write("Email id:" + emailvalue + "<br>");
    document.write("Phone Number:" + phonevalue + "<br>");
    document.write("Gender:" + gendervalue + "<br>");
    document.write("Address:" + addressvalue + "<br>");
    document.write("State:" + selectvalue + "<br>");
    document.write("Language:" + langu + "<br>");
    document.write("Pincode:" + pincodevalue + "<br>");
    document.write("District:" + disvalue + "<br>");
}





