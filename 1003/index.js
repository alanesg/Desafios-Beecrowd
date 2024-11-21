const readline = require ('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Digite o valor de A: " , (entradaDados)=>{

    var  A= parseInt(entradaDados)
    
    rl.question("Digite o valor de B: ", (entradaDadosDois)=>{

        var B= parseInt(entradaDadosDois)

        var soma = (A + B)
        console.log("SOMA = " + soma)

        rl.close()
    })
})