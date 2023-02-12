//Characters to be used
var lower = 'abcdefghijklmnopqrstuvwxyz'.split("");//lowercase alphabet split into an array using .split method
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");//Uppercase alphabet split into an array using .split method
var num = [1,2,3,4,5,6,7,8,9,0];//Number array  
var spec ='!"#$%&()*+,-./:;<>+?[,]^_`{}|~'.split("");//special characters the user may want in password,split int an array using .split method
var chars =[] //working character array, begining empty, to be have others concat'ed into it
var passMax = 128 //maximum password length
var passMin = 8 //minimum password length
var length //variable to be used for password length
var pass =""//string for password

var passlength = function(){ //function to ask user for a password length
  let Plength= prompt("How long of a password would you like?") //input from user
  length = parseInt(Plength) //converts input to a number, non numbers return as "NaN" or Not a Number
  if(isNaN(length)){ // if input returns as not a number
    alert("Please enter a number") //alerts user of issue
    passlength() // restarts the function
  } else { // if input returns as a number
    if(length < passMin || length > passMax){ // checks if the number is too long or too short
      alert("Password length must be between " + passMin + " & " + passMax + " characters") // alerts user to the need to adjust password length
      passlength() // restarts function
    } else { //if input is a number between min and max password length
      console.log("Length locked in")
      return generate()
    }
  }
}

var charCheck = function(){ //checks the user has added characters to the working character array 
  if(chars.length==0){ //If the working character array is empty
    alert("You must choose some characters for your password") //alerts user that the working array is empty
    charset() //restarts the function to select character to be used
  }else{ //if the working character array is not empty
    passlength() //runs function to request a password lenght
    console.log("Characters selected")
  }}

var charset = function(){ // function to ask user which characters to be used
  if(confirm("Lower Characters?")==true){ //would you like to use lowercase letters?
    chars = chars.concat(lower) //adds lower case letters to working character list
  }
  if(confirm("Upper Characters?")==true){//would you like to use upper case letters?
    chars = chars.concat(upper) //adds Upper case letters to working character list
  }
  if(confirm("Numbers?")==true){ //as above, but with numbers
    chars = chars.concat(num)//adds numbers to working character list 
  }
  if(confirm("Special Characters?")==true){//as above, with special characters
    chars = chars.concat(spec) //adds special characters to working list
  }
  charCheck()//Runs function to check the working list 
}



var random = function(x){ //picks a random number with input variable being the max
  return(
    Math.floor(Math.random()* x) 
  )

}

var generate = function(){
  for(let i=0; i<length; i++){ //loops up to the length required
    pass=pass+chars[random(chars.length)] //concats the character at a random (picked by the random function above) index poisiton in the character array into the working password file 
    console.log(pass) //test item, displays the password
  }
}


charset() //test function, runs the charset function on reload 
// var generatePassword = function(){
  //run charset() yep
  //Select types of characters yep
  //select lenght yep
  //for loop with array of characters to pick from NOPE
  //return password
// }

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