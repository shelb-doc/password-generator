// Assignment Code.
var generateBtn = document.querySelector("#generate");

// Write password to the #password input.
function writePassword() {
  // Find text area with id password.
  var passwordText = document.querySelector("#password");

  // Capture User Criteria.
  var criteria = promptForCriteria();

  // Use given Criteria to create a password.
  var password = generatePassword(criteria);

  // Update text area with generated password.
  passwordText.value = password;

}

// Captures User Criteria for the Password and returns it in a dictionary.
function promptForCriteria(){

  // Declaring variables.
  var userInputs = {};
  userInputs.passwordLength = null;
  userInputs.useLowercase = null;
  userInputs.useUppercase = null;
  userInputs.useNumbers = null;
  userInputs.useSpecialCharacters = null;

  /* Getting user input for Password Length,
    ensuring that the length is between 8 and 128 characters and
    stopping users from inputting anything but a number.
  */
  while ((userInputs.passwordLength < 8) ||
        (userInputs.passwordLength > 128) ||
        (isNaN(userInputs.passwordLength))){

    userInputs.passwordLength = prompt ("How long should the password be?")

    // Error message in case input doesn't meet criteria.
    if((userInputs.passwordLength < 8) ||
    (userInputs.passwordLength > 128) ||
    (isNaN(userInputs.passwordLength))){
      alert("The password length must be between 8 and 128 characters.")
    }
  }

/*  Getting input for Character types to use in the password,
    making sure that the user selects at least one.
*/
  while (!(userInputs.useLowercase) &&
        !(userInputs.useUppercase) &&
        !(userInputs.useNumbers) &&
        !(userInputs.useSpecialCharacters)){
    userInputs.useLowercase = confirm("Include Lowercase Characters?");

    userInputs.useUppercase = confirm("Include Uppercase Characters?");

    userInputs.useNumbers = confirm("Include Numbers?");

    userInputs.useSpecialCharacters = confirm("Include Special Characters?");

    // Error in case no type is selected.
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

// Generates a Password using the provided dictionary and returns a string.
function generatePassword(criteria){

  // Declaring Variables.
  var options = "";
  var newPassword = "";

  // Adding Lowercase characters to the options.
  if(criteria.useLowercase){
    options = options + "abcdefghijklmnopqrstuvwxyz"
  }

  // Adding Uppercase characters to the options.
  if(criteria.useUppercase){
    options = options + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }

  // Adding Numbers characters to the options.
  if(criteria.useNumbers){
    options = options + "0123456789"
  }

  // Adding Special characters to the options.
  if(criteria.useSpecialCharacters){
    options = options + "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  }

  /* Generate the password by iterating the length provided by the user,
    then generating a random number in between 0 and the length of our options,
    and using that random index to return a character from the options.
*/
  for (i = 1; i <= criteria.passwordLength; i++) {
    var index = Math.floor(Math.random() * options.length);
    newPassword = newPassword + options.charAt(index)
  }
  return newPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
