let givenNum = parseInt(prompt("Introduce a whole number"));

if (!isNaN(givenNum)) {
    if (givenNum % 2 === 0) {
        alert(`${givenNum} is even`);
    } else {
        alert(`${givenNum} is odd`);
    }
} else {
    console.log("Please, introduce a valid number");
}
