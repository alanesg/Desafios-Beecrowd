const readline = require ('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Digite o valor do Raio para calcular: " ,(valorRaio)=>{

    var r = parseFloat(valorRaio)
    var pi = 3.14159
    var volume = (4/3.0) * pi * Math.pow(r , 3)


    console.log("VOLUME = " + (volume.toFixed(3)))

     rl.close()
})