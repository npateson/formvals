
// $(document).ready(function() {
    function keyupFunction(e) { 
        // e.preventDefault()
        var name=document.forms.myform.name.value;  
        // name=name.replace(/^\s+|\s+$/g, "");
        console.log(name);
        if (name.replace(/ +/g, "").length<5){  
            $("#name-h3").text("Name too short, please enter valid name").css("color", "red"); 

          } else { 
            $("#name-h3").text("Nice name").css("color", "green"); 

          }
    };

    function checkAge() {
        var age=document.forms.myform.age.value; 
        if(age<18) {
            $("#age-h3").text("Too young, please try again later").css("color", "red"); 

        } else {
            $("#age-h3").text("Good to go").css("color", "green"); 
        }

    }


    function validateEmail() {
        const email = document.forms.myform.email.value; 
        var re = /\S+@\S+\.\S+/;
        if ( re.test(email)) {$("#email-h3").text("I love your email").css("color", "green")}
        else {
            $("#email-h3").text("Invalid email, please re-enter").css("color", "red"); 
        };
      
    }
    

// });
function checkLength() {
    const val1 = document.forms.myform.p1.value;
    if (val1.length<6) {
        $("#password1-h3").text("Hey, password must be greater than 6 characters").css("color", "red");
    } else {
        $("#password1-h3").text("Not a bad password").css("color", "green");
    }
}

function checkPasswords() {
    let val1 = document.forms.myform.p1.value;  ;
    let val2 = document.forms.myform.p2.value;  ;
    console.log(val1);
    console.log(val2);
    if (val1 === val2) {
   

        $("#password2-h3").text("All looks great!!!").css("color", "green");
        
    } else {
        $("#password2").text("Password Mismatch, Please try again").css("color", "red");
     
 } 
}
