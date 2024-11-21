const { match } = require('assert')
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Digite um valor para a: ", (valorA) => {


    rl.question("Digite um valor para b: ", (valorB) => {

        rl.question("Digite um valor para s: ", (valorS) => {


            var a =parseInt (valorA)
            var b = parseInt(valorB)
            var s = parseInt(valorS)
            

                var maiorAB = (a+b+ Math.abs(a-b))/2

                var maior = (maiorAB+s+ Math.abs(maiorAB-s))/2  
             
            

            console.log(maior + " eh o maior")
            rl.close()
        })

    })


})