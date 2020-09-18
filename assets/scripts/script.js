// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");
  var criteria = promptForCriteria();
  console.log(criteria)
  // passwordText.value = password;

}

function promptForCriteria(){
  var userInputs = {};
  userInputs.passwordLength = null;

  while ((userInputs.passwordLength < 8) ||
        (userInputs.passwordLength > 128) ||
        (isNaN(userInputs.passwordLength))){
    userInputs.passwordLength = prompt ("How long should the password be?")
  }

  userInputs.useLowercase = confirm("Include Lowercase Characters?");

  userInputs.useUppercase = confirm("Include Uppercase Characters?");

  userInputs.useNumbers = confirm("Include Numbers?");

  userInputs.useSpecialCharacters = confirm("Include Special Characters?");

  alert("How long should the password be? " + userInputs.passwordLength + "\n" +
        "Include Lowercase Characters? " + userInputs.useLowercase + "\n" +
        "Include Uppercase Characters? " + userInputs.useUppercase + "\n" +
        "Include Numbers? " + userInputs.useNumbers + "\n" +
        "Include Special Characters? " + userInputs.useSpecialCharacters);
  return userInputs;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
