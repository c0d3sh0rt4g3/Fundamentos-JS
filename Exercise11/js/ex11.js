let givenNum = Number(prompt("Enter a number"))

while (isNaN(givenNum) || givenNum >= 0) {
    if (isNaN(givenNum) || givenNum == "") {
        alert("Please enter a valid number");
    }
    givenNum = Number(prompt("Enter a number"))
}

