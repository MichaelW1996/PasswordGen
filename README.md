# Password generator

### I'd like to make a generator to create random passwords for security 

#### Below i have detailed the process of making this password generator.

<br>

Link to live site: https://github.com/MichaelW1996/PasswordGen

<br>


## Javascript:

Provided code:

    Starting code was provided, this had adequate styling, HTML content and partial Javascript, i took this and developed the JS to perform the function of the site.

Javascript:

    At the top of the document i have listed variables that i wish to be global, i also find this is a more convenient place to store them if i should want to adjust any properties of the program such as which special characters are available or the maximum lenght of a password

    I gave variable names to some data that i only used once in order to make the code more readable, a good example of this is the min and max lenghts for the password 

    I had noticed that the page would retain the password generated even after a refresh, as such i started the JS by defining the "pass" variable as a default text and writing this to the page as a clean slate

    Function 1 (passLength) Ask for a length of password and return alerts if the responce is not valid

        User is prompted for a password length, this is stored as variable "Plength" (prompt length)

        this is parsed into an interger, if the string was not a valid number this would result in a NaN response (not a number)

        If variable length is not an number and the parse returns as such, user received alert "Please enter a number" and function starts over

        If variable length is not of valid length, user received alert "Password must be between Min and max" and function starts over

        This function ends by running the generation function

    Function 2 (charCheck) Checks the characters produced in function 3 to make sure that valid selections have been made

        Checks if the char array is empty (or of a length 0) and alerts the user if this is true "You must choose some characters for your password", then reruns function 3 to ask the user to pick characters

        if the array is not empty, runs function 1 to ask for a password length


    Function 3 (charset): Generate an array of possible characters

        when called, prompts the user to create an array of chosen characters.

        This is acheived by using chars as a working array which is added to at each step

        I used concat to attach the selected characters to the working array chars if the confirm box is true (indicating user pressed "OK")

        After all the confirms have been accepted or skipped the function runs charCheck(function 2) to check the output


    Function 4 (random) picks a random number from 0 to x

        Uses Math.random to make a random figure between 0 and 1, this is multiplied by x to give a between 0 and x, however this is a decimal

        Math.floor is used to round this down to a whole number


    Function 5: (generate) makes a password using input of the previous functions this is performed by: 
    
        Running a loop, until the password is of the Length described by Function 1

        Each time the loop runs a character from the array of available characters is selected by a random number generator, this character is added to the pass variable

        once the loop is finished it prints the pass variable into passwordText.value 


   
    The JS ends with an event listener waiting for a click on the generate button, when pressed the Write password function is run 


## Screenshots

Screenshot of deployed site:

![Live](Assets/Images/LiveSite.png)

User inputs:

![Confirm](Assets/Images/Confirm.png)

![Number input](Assets/Images/Length%20Prompt.png)


Failed State:

![Failed on characters](Assets/Images/Failed.png)

![Failed length](Assets/Images/FailedLength.png)


Result:

![Password](Assets/Images/Password.png)


Coded by Michael Walters