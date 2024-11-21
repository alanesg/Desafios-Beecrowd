const readline = require ('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Entrada para X
rl.question("Digite um valor para X: ", (valorX)=>{
    
    // Definindo a variável X
    var x = parseInt(valorX)

    //Entrada para Y
    rl.question("Digite um valor para Y: ", (valorY)=>{

        // Definindo a variável Y
        var y = parseFloat(valorY)
    
    //Fórmula para calcular o consumo médio
        consumo = x/y

        console.log(consumo.toFixed(3) + " km/l")
    //fechamento
        rl.close()
    })
})