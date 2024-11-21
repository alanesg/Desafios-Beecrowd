const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//entrada com a distância

    rl.question("Digite a distância em km: ", (distancia) => {
    const d = parseInt(distancia)
    //calcula o tempo
    const tempo = 2*d
        //Exibe o resultado
            console.log(tempo + " minutos")
            rl.close()

        })

    