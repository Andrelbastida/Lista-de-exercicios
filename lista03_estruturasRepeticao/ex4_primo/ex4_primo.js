var btn = document.getElementById('btnCalcular')
btn.addEventListener('click',calcule)



function calcule(){

    let n1 = Number(document.getElementById('n1').value)
    let cont = 2
    let resultado = "Primo"

    while (cont < n1){
        if(n1 % cont == 0){
            resultado = "Não é Primo"
        }
        cont ++
    }
    
<<<<<<< HEAD
    // ...
=======
>>>>>>> 8b06def7876323de125e7446d2a0da6fcfffa29e

document.getElementById("result").innerHTML= resultado

}