const givenNum = Number(prompt("Introduce a wholes number to know its factorial"))

if (!isNaN(givenNum) && Number(givenNum) % 1 === 0 ){
    let factorial = 1
    for (let i = 1; i <= givenNum; i++) {
        factorial *= i
    }
    alert(`The factorial of the number would be: ${factorial}`)
} else {
    alert("Please enter a valid number")
}