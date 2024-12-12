const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

rl.question("Digite o tempo gasto em horas da viagem: ", (tempoGastoViagem) => {
    rl.question("Digite a velocidade média em Km/h: ", (velocidadeMedia)=>{
        var t = parseInt(tempoGastoViagem)
        var v = parseInt(velocidadeMedia)
    
    calculo = (t*v)/12
        console.log ("", (calculo.toFixed(3)))
        rl.close() 
    })
})

