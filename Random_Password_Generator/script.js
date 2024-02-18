// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// list of special " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
// list of a-z "abcdefghijklmnopqrstuvwxyz"
var alphabetArray = ("abcdefghijklmnopqrstuvwxyz".split = "");   
var specialArray = ( "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split = "");
// Write password to the #password input

function writePassword() {
  var userChoiceLength = window.prompt("What is the length of the password?");
  if (userChoiceLength < 8 ){
    window.alert("Character length must be more then 8 characters long.");
    return;
  } else if (userChoiceLength> 128){
    window.alert("Character length must be less then 128 characters long.");
    return;
  }
  var userChoiceLower = window.confirm("Would you like lowercase letters?");
  var userChoiceUpper = window.confirm("Would you like uppercase letters?");
  var userChoiceNumeric = window.confirm("Would you like numeric characters?");
  var userChoiceSpecial = window.confirm("Would you like special characters?");

  if (!userChoiceLower && !userChoiceNumeric && !userChoiceSpecial && !userChoiceUpper){
    window.alert("Password must be contain atleast one of lowercase, uppercase, numeric, or special characters.");
    return;
  }    

  /*function generatePassword() { 
      for (var i = 0; i< userChoiceLength.length; i++);
      function randomType() {
        if (userChoiceUpper && userChoiceLower && userChoiceNumeric && userChoiceSpecial){

        }
      } 

  }
  */

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
/*WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page*/
