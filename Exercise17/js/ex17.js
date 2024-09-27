let i = 0
let timesIntroduced18 = 0

while (i < 5){
    const givenAge = Number(prompt("What is your age?"))
    if (isNaN(givenAge) || givenAge % 1 !== 0 || givenAge < 0){
        alert("Please enter a valid age")
    }else if (givenAge >= 18){
        timesIntroduced18++
        console.log(timesIntroduced18)
    }
    i++
}

alert(`There's been introduced an age higher or equal to 18 ${timesIntroduced18} times`)