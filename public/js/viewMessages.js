// Retrieve the messages from the database
const getMessages = () => {
 const messagesRef = firebase.database().ref('/message');
 messagesRef.on('value', (snapshot) => {
     const data = snapshot.val();
     console.log(data);
     // Find message
     findMessage(data);
 });
}

const findMessage = (messages) => {
 const passcodeAttempt = document.querySelector('#passcode').value;
 for (message in messages) {
     const messageData = messages[message];
     console.log("so far", messages, message);
     //var MD5 = new Hashes.MD5;
     //let hashed = MD5.hex(messageData.passcode);
     if (messageData.passcode === passcodeAttempt) {
         renderMessageAsHtml(messageData.message);
         console.log("in if");
     }
 }
}


const renderMessageAsHtml = (message) => {
 // Hide Input Form
    const passcodeInput = document.querySelector('#passcodeInput');
    passcodeInput.style.display = 'none';
    document.querySelector("#title").innerHTML = "Your Secret Messages are..."
 // Render messageas HTML
    const messageDiv = document.querySelector('#message');
    messageDiv.innerHTML = message;
}