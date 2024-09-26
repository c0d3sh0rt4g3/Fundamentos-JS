// Ask the user to introduce and number and we change it from type "String" to type "Number"
const givenNum = Number(prompt("Give me a number"))

// Use a ternary operator to get which message we'll have to show
const textToShow =
    // If the number is greater than 0 it'll show that it's positive
    givenNum > 0 ? "The number is positive" :
        // If the number is less than 0 it'll show that it's negative
        givenNum < 0  ? "The number is negative" :
            // If the number is exactly 0 it'll show that it's zero
            givenNum === 0 ? "The number is zero" :
                // If it's not a valid number it'll show this message
                "The data introduced is not a number"

// Display the result in an alert
alert(textToShow)


/* Test Scenarios:

    Scenario 1: Enter a positive number
       Input: 10
       Expected Output: The number is positive
       Output: The message correctly indicates that the number is positive.

    Scenario 2: Enter a negative number
       Input: -5
       Expected Output: The number is negative
       Output: The message correctly indicates that the number is negative.

    Scenario 3: Enter zero
       Input: 0
       Expected Output: The number is zero
       Output: The program correctly identifies that the number is zero.

    Scenario 4: Enter a positive decimal number
       Input: 3.14
       Expected Output: The number is positive
       Output: The message correctly indicates that the number is positive.

   Scenario 4: Enter a negative decimal number
       Input: -5.78
       Expected Output: The number is negative
       Output: The message correctly indicates that the number is negative.

   Scenario 7: Enter nothing
       Input: (nothing)
       Expected Output: The data introduced is not a number
       Output: The program recognizes that no number was entered.

   Scenario 8: Enter text
       Input: dhdkjahdskj
       Expected Output: The data introduced is not a number
       Observed Behavior: The program shows that the input is not a number.
*/