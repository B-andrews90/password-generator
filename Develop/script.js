// Assignment code here
var userInput
var numberInput = "1234567890";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var specialChars = "[!@#$%^&*)(|\?><:;]";

var confirmCharacter;
var confirmNumber;
var confirmUppercase;
var confirmLowercase;

var userChoices;

function generatePassword() {

  userInput = window.prompt("How many characters would you like your password to be? Choose between 8 and 128");
  if (!userInput) {
    alert("This needs a value");
  } 
  else if (userInput < 8 || userInput > 128){
    userInput = window.prompt("You must choose between 8 and 128");
  } else {

    confirmNumber = confirm("Will this contain numbers?");
    confirmCharacter = confirm("Will this contain special characters?");
    confirmUppercase = confirm("Will this contain Uppercase letters?");
    confirmLowercase = confirm("Will this contain Lowercase letters?");
  }
  

  if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
    userChoices = alert("You must choose a criteria!");
  }

else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

    userChoices = specialChars.concat(numberInput, lowerCase, upperCase);
}
// Else if for 3 positive options
else if (confirmCharacter && confirmNumber && confirmUppercase) {
    userChoices = specialChars.concat(numberInput, upperCase);
}
else if (confirmCharacter && confirmNumber && confirmLowercase) {
    userChoices = specialChars.concat(numberInput, lowerCase);
}
else if (confirmCharacter && confirmLowercase && confirmUppercase) {
    userChoices = specialChars.concat(lowerCase, upperCase);
}
else if (confirmNumber && confirmLowercase && confirmUppercase) {
    userChoices = numberInput.concat(lowerCase, upperCase);
}
// Else if for 2 positive options 
else if (confirmCharacter && confirmNumber) {
    userChoices = specialChars.concat(numberInput);

} else if (confirmCharacter && confirmLowercase) {
    userChoices = specialChars.concat(lowerCase);

} else if (confirmCharacter && confirmUppercase) {
    userChoices = specialChars.concat(upperCase);
}
else if (confirmLowercase && confirmNumber) {
    userChoices = lowerCase.concat(numberInput);

} else if (confirmLowercase && confirmUppercase) {
    userChoices = lowerCase.concat(upperCase);

} else if (confirmNumber && confirmUppercase) {
    userChoices = numberInput.concat(upperCase);
}
// Else if for 1 positive option
else if (confirmCharacter) {
    userChoices = specialChars;
}
else if (confirmNumber) {
    userChoices = numberInput;
}
else if (confirmLowercase) {
    userChoices = lowerCase;
}

var password=[];

for (var i = 0; i < enter; i++) {
  var pickChoices = choices[Math.floor(Math.random() * choices.length)];
  password.push(pickChoices);
}

    var ps = password.join("");
    userInput(ps);
    return ps;
};


var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});


function UserInput(ps) {
  document.getElementById("password").textContent = ps;

}