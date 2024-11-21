const readline = require ('readline')

const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
})

rl.question("Digite a primeira nota: " ,(entradaUsuario)=>{

    var A = parseFloat(entradaUsuario)

    rl.question("Digite a segunda nota: ",(entradaUsuarioDois)=>{

        var B = parseFloat(entradaUsuarioDois)
        var media = (A * 3.5 + B * 7.5)/ 11;
    
        console.log ("MEDIA = " + media.toFixed(5))

        rl.close()
    })

})