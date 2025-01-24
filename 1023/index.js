const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Digite um número para A: ", (valorA) => {
    let a = parseFloat(valorA)

    rl.question("Digite um valor para B: ", (valorB) => {
        let b = parseFloat(valorB)

        rl.question("Digite um valor para C: ", (valorC) => {
        let c = parseFloat(valorC)


            rl.close();
        })
    })
})