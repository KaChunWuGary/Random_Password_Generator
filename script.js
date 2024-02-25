// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// list of special " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
// list of a-z "abcdefghijklmnopqrstuvwxyz"
var alphabetArray = "abcdefghijklmnopqrstuvwxyz".split('');
var specialArray = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split ('');
var alphabetArrayUpper = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split('');
var numericArray = "0123456789".split('');

// Write password to the #password input

function writePassword() {
    var password = "";
  //this prompts if length is not between 8-128 characters  
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
  //if user doesn't choose any, this prompts with error message
    if (!userChoiceLower && !userChoiceUpper && !userChoiceNumeric && !userChoiceSpecial){
    window.alert("Password must be contain atleast one of lowercase, uppercase, numeric, or special characters.");
    return;
    }    
 
    function generatePassword() { 
    //this loops it based on user's length requirements.
    for (var i = 0; i< userChoiceLength; i++){
        var choiceTypes;
        var choiceTypesIndex;
        var choiceIndexRandom;
        var choiceTypeFinal;
    // this is the code to randomize when all the choices are locked in
        function randomizationCode() {
            choiceIndexRandom = Math.floor(Math.random() * choiceTypes);
            choiceTypeFinal = choiceTypesIndex[choiceIndexRandom];
        }
    //This is to randomize the character types as the user picks yes or no
        function randomType() {
            if (userChoiceUpper && userChoiceLower && userChoiceNumeric && userChoiceSpecial){
                choiceTypes = 4;
                choiceTypesIndex = [alphabetArray,alphabetArrayUpper,numericArray,specialArray];
                randomizationCode();
            } else if (userChoiceUpper && userChoiceLower && userChoiceNumeric && !userChoiceSpecial){
                choiceTypes = 3;
                choiceTypesIndex = [alphabetArray,alphabetArrayUpper,numericArray];
                randomizationCode();
            } else if (userChoiceUpper && userChoiceLower && !userChoiceNumeric && userChoiceSpecial){
                choiceTypes = 3;
                choiceTypesIndex = [alphabetArrayUpper,alphabetArray,specialArray];
                randomizationCode ();
            } else if (userChoiceUpper && !userChoiceLower && userChoiceNumeric && userChoiceSpecial){
                choiceTypes = 3;
                choiceTypesIndex = [alphabetArray,numericArray,specialArray];
                randomizationCode();
            } else if (userChoiceUpper && userChoiceLower && !userChoiceNumeric && !userChoiceSpecial){
                choiceTypes = 2;
                choiceTypesIndex = [alphabetArrayUpper,alphabetArray];
                randomizationCode();
            } else if (userChoiceUpper && !userChoiceLower && userChoiceNumeric && !userChoiceSpecial){
                choiceTypes = 2;
                choiceTypesIndex = [alphabetArrayUpper,numericArray];
                randomizationCode();
            } else if (userChoiceUpper && !userChoiceLower && !userChoiceNumeric && userChoiceSpecial){
                choiceTypes = 2;
                choiceTypesIndex = [alphabetArrayUpper,specialArray];
                randomizationCode();
            } else if (userChoiceUpper && !userChoiceLower && !userChoiceNumeric && !userChoiceSpecial){
                choiceTypeFinal = alphabetArrayUpper;
            } else if (!userChoiceUpper && userChoiceLower && !userChoiceNumeric && !userChoiceSpecial){
                choiceTypeFinal = alphabetArray;
            } else if (!userChoiceUpper && userChoiceLower && userChoiceNumeric && !userChoiceSpecial){     
                choiceTypes = 2;
                choiceTypesIndex = [alphabetArray,numericArray];
                randomizationCode();
            } else if (!userChoiceUpper && !userChoiceLower && userChoiceNumeric && !userChoiceSpecial){   
                choiceTypeFinal = numericArray;
            } else if (!userChoiceUpper && userChoiceLower && userChoiceNumeric && userChoiceSpecial){    
                choiceTypes = 3;
                choiceTypesIndex = [userChoiceLower,userChoiceNumeric,userChoiceSpecial];
                randomizationCode();
            } else if (!userChoiceUpper && !userChoiceLower && userChoiceNumeric && userChoiceSpecial){   
                choiceTypes = 2;
                choiceTypesIndex = [numericArray,specialArray];
                randomizationCode();
            } else if (!userChoiceUpper && userChoiceLower && !userChoiceNumeric && userChoiceSpecial){    
                choiceTypes = 2;
                choiceTypesIndex = [alphabetArray,specialArray];
            } else if (!userChoiceUpper && !userChoiceLower && !userChoiceNumeric && userChoiceSpecial){ 
                choiceTypeFinal = specialArray;
            }     
        }        
        // this adds the character onto the password variable. 
        randomType();
        var passwordIndexRandom = Math.floor(Math.random() * choiceTypeFinal.length);
        var passwordDisplay = choiceTypeFinal[passwordIndexRandom];
        password += passwordDisplay;  
        var passwordText = document.querySelector("#password");
        passwordText.value = password;
    }
    }     

    password = generatePassword();
    
}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
