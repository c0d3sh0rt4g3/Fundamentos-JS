const givenNumString = prompt("Give me a number")

const givenNum = Number(givenNumString)

console.log(givenNum)

const textToShow = givenNum > 0 ? "The number is positive" :
    givenNum < 0  ? "The number is negative" :
        givenNum === 0 ? "The number is zero" :
            "The data introduced is not a number"

alert(textToShow)