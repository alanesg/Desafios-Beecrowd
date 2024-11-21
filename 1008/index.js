const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Funcionário, digite seu número: ",(numeroFuncionario)=>{
    var numeroF = parseInt(numeroFuncionario)

    rl.question("Funcionário, digite a quantidade de horas trabalhadas: ",(horasTrabalhadas)=>{
        var horas = parseInt(horasTrabalhadas)
        
        rl.question("Digite o valor que recebe por hora: ", (valorPorHora)=>{
            var salario = parseFloat(valorPorHora)

            var resultadoSalario = (horas * salario)

            console.log("NUMBER = "+ (numeroF) + " SALARY = U$ " +(resultadoSalario.toFixed(2)))
            rl.close()
        })
    })
})