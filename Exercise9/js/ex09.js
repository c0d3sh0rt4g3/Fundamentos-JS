const givenAge = Number(prompt("Whats your age?"))
const givenNationality = prompt("What is your nationality?")

// We check that the data given is a number, that it's higher than 0, that it's lower than 100 and that it isn't a float number
if (isNaN(givenAge) || givenAge < 0 || givenAge > 100 || givenAge % 1 !== 0) {
    alert("Please enter a valid age")
// If the age given is 18 or more and the nationality given is Spanish it would pop an alert
} else if (givenAge >= 18 && givenNationality.toLowerCase() === "spanish") {
    alert("You can vote")
} else {
    alert("You can't vote")
}