// Assignment code here
var charLength = function() {
  var result = window.prompt("How many characters do you want your password to be? Enter a number between 8 and 128.");
 if (result >= 8 && result <= 128) {
  return result
 } else {
  window.alert('Please provide a number no less than 8 and no greater than 128.');
  
 }
};

//ask for character type
var charTypeLowerCase = function () {
  var result = window.confirm("Should your password include lowercase letters?");
    if (result === true) {
    charTypeLowerCase = true;
  } 
    else {
    charTypeLowerCase = false;
  }
};

var charTypeUpperCase = function () {
  var result = window.confirm("Should your password include uppercase letters?");
  if (result === true) {
   charTypeUpperCase = true;
 } 
 else {
   charTypeUpperCase = false;
 }
};
 
var charTypeNumbers = function () {
   var result = window.confirm("Should your password include numbers?");
   if (result === true) {
     charTypeNumbers = true;
   } 
   else {
     charTypeNumbers = false;
   }
};
 
var charTypeSpecial = function () {
   var result = window.confirm("Should your password include special chatacters?");
   if (result === true) {
     charTypeSpecial = true;
   } 
   else {
     charTypeSpecial = false;
   }
};

function generatePassword() {

  charLength();
  charTypeLowerCase();
  charTypeUpperCase();
  charTypeNumbers();
  charTypeSpecial();


  var chars ="0123456789!@#$%^&*()_+=-[{}]}|<>?,./:”;’abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordLength = 8;
  var password = "";

  for (var i=0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }

  return password;
};


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

