// Assignment code here
let lowerCaseAlphabet = 'abcdefghijklmnopqrstuvwxyz';
let upperCaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let numbers = '0123456789';
let symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

function buttonClick() {
  let pwdInput = window.prompt('How many characters between 8 & 128, would you like to have in your password?');
  if (pwdInput > 7 && pwdInput < 129) {
    let message = window.alert(`Your password will be ${pwdInput} characters long, please continue with the selection criteria.`);
  } else {
    window.alert('Your password needs to be atleast 8 characters long, upto a maximum of 128 characters.');
    buttonClick();
  }
  let lowerInput = window.confirm('Do you want lower case characters in your password?');
  let upperInput = window.confirm('Do you want upper case characters in your password?');
  let numberInput = window.confirm('Do you want numbers as characters in your password?');
  let symbolInput = window.confirm('Do you want symbols as characters in your password?');
  };

  function generateString(length) {
    let result = ' ';
    const charactersLength = lowerCaseAlphabet.length;
    for ( let i = 0; i < length; i++ ) {
        result += lowerCaseAlphabet.charAt(Math.floor(Math.random() * charactersLength));
    }
        return result;
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
