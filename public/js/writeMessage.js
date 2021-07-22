const submitMessage = () => {
    if(document.querySelector("#message").value.length > 15) {
        alert("You can only send a message with less than 15 characters! Please try again")
    }else {
        //var MD5 = new Hashes.MD5();
        const password = document.querySelector("#passcode").value;
        const message = document.querySelector("#message").value;
        console.log(passcode + " " + message);
        //const hashing = newFunction(MD5);
        if (password.match(/[a-z]+/)) {
            if (password.match(/[A-Z]+/)) {
                if (password.match(/[0-9]+/)) {
                    if (password.match(/[$@#&!]+/)) {
                        firebase.database().ref("/message").push({
                            passcode: password,
                            message: message
                        });
                    } else {
                        alert("Your password needs to have atleast one character from [!@#$&]");
                    }
                }else{
                    alert("Your password needs to have atleast one number!");
                }
            }else {
        alert("Your password needs to have atleast one uppercase letter!");
            }
        }else{
            alert("Your password needs to have atleast one lowercase letter!");
        }   
    }
}