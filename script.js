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
  let finalString = ''
  let lowerInput = window.confirm('Do you want lower case characters in your password?');
  if (lowerInput === true) {
      finalString = finalString + lowerCaseAlphabet;
      alert('Your password will have lower case characters.')
  } else {
      alert('Your password will not have lower case characters.')
  }
  let upperInput = window.confirm('Do you want upper case characters in your password?');
  if  (upperInput === true) {
      finalString = finalString + upperCaseAlphabet;
      alert('Your password will have upper case characters.')
} else {
      alert('Your password will not have upper case characters.')
}
  let numberInput = window.confirm('Do you want numbers as characters in your password?');
  if  (numberInput === true) {
      finalString = finalString + numbers;
      alert('Your password will have numbered characters.')
} else {
      alert('Your password will not have numbered characters.')
}
  let symbolInput = window.confirm('Do you want symbols as characters in your password?');
  if  (symbolInput === true) {
      finalString = finalString + symbols;
      alert('Your password will have symbol characters.')
} else {
      alert('Your password will not have symbol characters.')
}
return generateString(pwdInput, finalString);
};

function generateString(pwdInput, finalString) {
    let result = '';
    const charactersLength = finalString.length;
    for ( let i = 0; i < length; i++ ) {
        result += finalString.charAt(Math.floor(Math.random() * charactersLength));
    }
    console.log(result);
    var passwordText = document.querySelector("#password");
    passwordText.value = result;
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
