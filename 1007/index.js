const readline = require('readline')

const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Digite o primeiro valor: ", (primeiroValor)=>{
    var A = parseInt(primeiroValor) 

    rl.question("Digite o segundo valor: ", (segundoValor)=>{
    var B = parseInt(segundoValor)

        rl.question("Digite o terceiro valor: ", (terceiroValor)=>{
        var C = parseInt(terceiroValor)

            rl.question ("Digite o quarto valor: ", (quartoValor)=>{
            var D = parseInt(quartoValor)

                var diferenca = (A*B-C*D)

                console.log("DIFERENCA = " + (diferenca))

            rl.close()
        })
    })
})




})