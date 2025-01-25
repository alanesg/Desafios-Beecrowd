const readline = require('readline');

const rl = readline.CreateInterface ({
    input: process.stdin,
    output: process.stdout
})

rl.question("Digite um valor para A", (valorA) => {
let a = parseInt(valorA)



rl.close();
})