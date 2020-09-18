// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  var passwordText = document.querySelector("#password");
  var criteria = promptForCriteria();

  var password = generatePassword(criteria);

  passwordText.value = password;

}

function promptForCriteria(){
  var userInputs = {};
  userInputs.passwordLength = null;
  userInputs.useLowercase = null;
  userInputs.useUppercase = null;
  userInputs.useNumbers = null;
  userInputs.useSpecialCharacters = null;

  while ((userInputs.passwordLength < 8) ||
        (userInputs.passwordLength > 128) ||
        (isNaN(userInputs.passwordLength))){

    userInputs.passwordLength = prompt ("How long should the password be?")

    if((userInputs.passwordLength < 8) ||
    (userInputs.passwordLength > 128) ||
    (isNaN(userInputs.passwordLength))){
      alert("The password length must be between 8 and 128 characters.")
    }
  }

  while (!(userInputs.useLowercase) &&
        !(userInputs.useUppercase) &&
        !(userInputs.useNumbers) &&
        !(userInputs.useSpecialCharacters)){
    userInputs.useLowercase = confirm("Include Lowercase Characters?");

    userInputs.useUppercase = confirm("Include Uppercase Characters?");

    userInputs.useNumbers = confirm("Include Numbers?");

    userInputs.useSpecialCharacters = confirm("Include Special Characters?");

    if(!(userInputs.useLowercase) &&
        !(userInputs.useUppercase) &&
        !(userInputs.useNumbers) &&
        !(userInputs.useSpecialCharacters)){
      alert("Please select at least one type of characters.")
    }
  }

  alert("How long should the password be? " + userInputs.passwordLength + "\n" +
        "Include Lowercase Characters? " + userInputs.useLowercase + "\n" +
        "Include Uppercase Characters? " + userInputs.useUppercase + "\n" +
        "Include Numbers? " + userInputs.useNumbers + "\n" +
        "Include Special Characters? " + userInputs.useSpecialCharacters);
  return userInputs;
}

function generatePassword(criteria){
  var options = "";
  var newPassword = "";

  if(criteria.useLowercase){
    options = options + "abcdefghijklmnopqrstuvwxyz"
  }

  if(criteria.useUppercase){
    options = options + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }

  if(criteria.useNumbers){
    options = options + "0123456789"
  }

  if(criteria.useSpecialCharacters){
    options = options + "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  }

  for (i = 1; i <= criteria.passwordLength; i++) {
    var index = Math.floor(Math.random() * options.length);
    newPassword = newPassword + options.charAt(index)
  }
  return newPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
