const readline = require ('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question ("Digite um valor para x1: " , (valorX1)=>{
    
    var x1 = parseFloat (valorX1)

        rl.question ("Digite um valor para y1: ", (valorY1)=>{

            var y1 = parseFloat(valorY1)

            rl.question ("Digite um valor para x2: ", (valorX2)=>{

                var x2 = parseFloat (valorX2)
            rl.question ("Digite um valor para y2: ", (valorY2)=>{
                
                var y2 = parseFloat(valorY2)

            // o Math.sqrt é pra calcular raíz quadrada.
            // o Math.pow é pra calcular numeros elevados ao quadrado por exemplo.
            distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))

                console.log(distancia.toFixed(4))
                rl.close()
            })


        })

    })

    
})