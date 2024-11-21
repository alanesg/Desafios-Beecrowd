const readline = require ('readline')

const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
})

rl.question ("Digite a primeira nota: ", (primeiraNota)=>{

    var A = parseFloat(primeiraNota)

    rl.question ("Digite a segunda nota: ", (segundaNota)=>{

        var B = parseFloat(segundaNota)

        rl.question("Digite a terceira nota: ", (terceiraNota)=>{


            var C = parseFloat(terceiraNota)
            var media = (A * 2 + B * 3 + C * 5)/ 10
        
            console.log("MEDIA = " + media.toFixed(1))
            rl.close()
        })

    })
})