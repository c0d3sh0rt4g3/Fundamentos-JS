let givenNum = Number(prompt("Enter a number"))

while (isNaN(givenNum) || givenNum == "") {
    givenNum = Number(prompt("Please enter a valid number"))
}
