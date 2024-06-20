const inputField = document.getElementById("inp");
let created = false;
function checkInput() {
    let message = inputField.value;
    
    if(checkString(message)) {
        display("Pronouns are valid!");
    } else {
        display("Pronouns are made up bs :D")
    }
}

function checkString(message) {
    if(message.includes("he/him") || message.includes("she/her")) {
        return true;
    } else {
        return false;
    }
}

function display(string) {
    
    const app = document.getElementById("output");
    if(created) {
        x = document.getElementsByTagName("p")[0];
        x.textContent = string;
    } else {
        let x = document.createElement("p");
        x.textContent = string;
        app.appendChild(x);

        created = true;
    }
    

    

    
}