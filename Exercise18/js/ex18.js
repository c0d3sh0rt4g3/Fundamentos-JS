const givenNum = prompt("Introduce a whole number")

if (givenNum !== null && !isNaN(givenNum) && Number(givenNum) % 1 === 0 ){
    let sum = 0
    for (let digit of givenNum){
        sum += Number(digit)
    }
    alert(`The sum of the number digits would be: ${sum}`)
} else {
    alert("Please enter a valid number")
}