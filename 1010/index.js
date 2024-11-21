//Dados básicos
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//PRIMEIRA LINHA
rl.question("Digite o código da peça: ", (codigoPeca) => {
    var codigo = (codigoPeca)

    rl.question("Digite o número de peças: ", (numeroPecas) => {
        var quantidadePecas = parseInt (numeroPecas)

        rl.question("Digite o valor unitário da peça: ", (valorPeca) => {
            var preco = parseFloat(valorPeca)

            //cálculo primeira linha
            var resultadoUm = quantidadePecas *  preco


            //SEGUNDA LINHA
            rl.question("Digite o código da Próxima peça: ", (codigoPecaDois) => {
                var codigoDois = (codigoPecaDois)

                rl.question("Digite o número de peças: ", (numeroPecasDois) => {
                    var quantidadePecasDois = parseInt(numeroPecasDois)

                    rl.question("Digite o valor unitário da peça: ", (valorPecaDois) => {
                        var precoDois = parseFloat(valorPecaDois)

                        //Cálculo segunda linha
                        var resultadoDois = quantidadePecasDois * precoDois

                        //Calculo total
                        var valorTotal = resultadoUm + resultadoDois

                        //Saída (impressão)
                       console.log("VALOR A PAGAR: R$ ", valorTotal.toFixed(2))
                        rl.close()
                    })
                })
            })
        })
    })
})