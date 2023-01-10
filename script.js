

// Function to prompt user for password options
    
let lenght = prompt("How many characters would you like your password to contain?");
let special = prompt("Include special character?");
if (lenght>=10) {
alert("Welcome!");
}


// Function to generate password with user input
function generatePassword() {
const lenght= 16;
const characters = "abcdefghijlmnopqrtuvxyzABCDEFGHIJLMNOPQRTUVXYZ0123456789!@£#%^&*()/?";
let password = "";
for (let i=0; i < lenght; i++){
  const character = characters[Math.floor(Math.random()*characters.length)];
password += character;
}
return password;

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);