const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let div1 = document.getElementById('first-password')
let div2 = document.getElementById('second-password')


function randomGenerator() {
    let passwordLength = document.getElementById("length").value
    
    if (passwordLength === "") {
        passwordLength = 10
    } else if (passwordLength < 5 || passwordLength > 20) {
        console.log("Please keep your password length between 5 and 20 (inclusive)")
        return
    }
    
    // Create two lists two store the random characters
    let randomPassword1 = ""
    let randomPassword2 = ""
        
    for(let i = 0; i < passwordLength; i++) {
        // Get random indices for both divs
        randomIndex1 = Math.floor(Math.random() * characters.length)
        randomIndex2 = Math.floor(Math.random() * characters.length)
        
        // Get the corresponding character from the list and add to the string
        randomPassword1 += characters[randomIndex1]
        randomPassword2 += characters[randomIndex2]
    }
    
    // Publish the random passwords to the divs
    div1.textContent = randomPassword1
    div2.textContent = randomPassword2
}



