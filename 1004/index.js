const readline = require ('readline')

const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
})

rl.question("Digite o primeiro número: " , (primeiroValor)=>{
    var A = parseInt(primeiroValor)

    rl.question("Digite o segundo número: " ,(segundoValor)=>{
        var B = parseInt(segundoValor)

        var PROD = A * B

        console.log("PROD = " + (PROD))

        rl.close()
    })
})