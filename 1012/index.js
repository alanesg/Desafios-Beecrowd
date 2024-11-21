const readline = require('readline')

const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

 //impressão ou entrada
rl.question("Digite um valor para A: ", (valorA)=>{
    var a= parseFloat(valorA)
    //raio é igual ao valor de c
   

    rl.question("Digite um valor para B: " ,(valorB)=>{
        var b = parseFloat(valorB)

        rl.question("Digite um valor para C: " ,(valorC)=>{
            var c = parseFloat(valorC)

            // formulas das áreas 
            var pi = 3.14159
            var areaTriangulo = (a*c)/2
            var areaCirculo = pi * Math.pow(c , 2)
            var areaTrapezio = ((a + b)*c )/2
            var areaQuadrado = b * b
            var areaRetangulo = a * b
        

           //saída
         console.log("TRIANGULO: " + areaTriangulo.toFixed(3)),
         console.log("CIRCULO: " + areaCirculo.toFixed(3)),
         console.log("TRAPEZIO: " + areaTrapezio.toFixed(3)),
         console.log("QUADRADO: " + areaQuadrado.toFixed(3)) ,
         console.log("RETANGULO: " + areaRetangulo.toFixed(3)),

            rl.close()
        })
    })
})