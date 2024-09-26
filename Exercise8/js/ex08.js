const givenAge = Number(prompt("Whats your age?"))

// We check that the data given is a number, that it's higher than 0, that it's lower than 100 and that it isn't a float number
if (isNaN(givenAge) || givenAge < 0 || givenAge > 100 || givenAge % 1 !== 0) {
    alert("Please enter a valid age")
// If the age given is between 18 and 25 years old it would pop an alert
} else if (givenAge >= 18 && givenAge <= 25) {
    alert("You have an age between 18 and 25 years old")
}
