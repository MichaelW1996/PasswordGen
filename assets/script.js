//Characters
var lower = 'abcdefghijklmnopqrstuvwxyz'.split("");
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
var num = [1,2,3,4,5,6,7,8,9,0];
var spec ='!"#$%&()*+,-./:;<>+?[,]^_`{}|~'.split("");
var chars =[]

console.log(lower)
console.log(upper)
console.log(num)
console.log(spec)

// Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

var charset = function(){
  if(confirm("Lower Characters?")==true){
    chars = chars.concat(lower)
  }
  if(confirm("Upper Characters?")==true){
    chars = chars.concat(upper)
  }
  if(confirm("Numbers?")==true){
    chars = chars.concat(num)
  }
  if(confirm("Special Characters?")==true){
    chars = chars.concat(spec)
  }
}

charset()
if(chars.length==0){
  console.log("Stupid boy, try again")
}else{
  console.log("Well done")
}
console.log(chars)

// var generatePassword = function(){
  //run charset()
  //Select types of characters
  //select lenght
  //for loop with array of characters to pick from
  //return password
// }