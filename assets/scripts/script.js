// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");
  var criteria = promptForCriteria();
  // passwordText.value = password;

}

function promptForCriteria(){
  var useLowercase = confirm("Include Lowercase Characters?");
  alert("Include Lowercase Characters? " + useLowercase);

  var useUppercase = confirm("Include Uppercase Characters?");
  alert("Include Uppercase Characters? " + useUppercase);

  var useNumbers = confirm("Include Numbers?");
  alert("Include Numbers? " + useNumbers);

  var useSpecialCharacters = confirm("Include Special Characters?");
  alert("Include Special Characters? " + useSpecialCharacters);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
