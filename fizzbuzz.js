const  fizzBuzz = () => {
    console.log("------------------------\nFIZZBUZZ\n------------------------")
    for(let i = 1; i <= 100; i++){
        if(i % 15 === 0){
            console.log(`${i} FIZZ BUZZ`);
        }else if(i % 5 === 0){
            console.log(`${i} buzz`);
        }else if (i % 3 === 0) {
            console.log(`${i} fizz`);
        }
    }
}

const ternaryFizzBuzz = () =>{
    console.log("------------------------\nTernary FIZZBUZZ\n------------------------")
    for(let i = 1; i <= 100; i++){
        const message =
            i % 15 === 0 ? `${i} FIZZ BUZZ` :
                i % 5 === 0 ? `${i} buzz` :
                    i % 3 === 0 ? `${i} fizz`: i
        console.log(message)
    }
}

fizzBuzz()
ternaryFizzBuzz()