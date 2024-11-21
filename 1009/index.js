const readline = require ('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Digite seu nome: ", (nomeVendedor)=>{
    var nome = (nomeVendedor)

    rl.question("Digite quanto você recebe: ", (salarioVendedor)=>{
        var salario = parseFloat(salarioVendedor)

        rl.question("Digite seu valor total de vendas efetuadas do mês: " , (totalVendas)=>{
            var vendas = parseFloat(totalVendas)

                //calculo de comissão
            var comissao= vendas * 0.15
            var totalReceber = salario + comissao

            //impressão do resultado 
            console.log("TOTAL = R$  " + totalReceber.toFixed(2))          
             rl.close()
        })
    })
})