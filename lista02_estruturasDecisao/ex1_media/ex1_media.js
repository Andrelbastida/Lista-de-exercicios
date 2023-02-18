var btn = document.getElementById("btnCalcular")
btn.addEventListener("click",calcularMedia)



function calcularMedia(){

    var n1 = Number(document.getElementById('n1').value)
    var n2 = Number(document.getElementById('n2').value)

    var calculo = ( n1 + n2 ) / 2
    if (calculo >= 6){
        document.getElementById("result").innerText= calculo + " Aprovado"
    } else {
        document.getElementById("result").innerText= calculo + " Reprovado"
    }
    
}

// PODENDO ESCREVER ESSA FUNÇÃO DE OUTRA MANEIRA :
/*
function calcularMedia(){

    var n1 = Number(document.getElementById('n1').value)
    var n2 = Number(document.getElementById('n2').value)
    var resultado 

    var calculo = ( n1 + n2 ) / 2

    if (calculo >= 6){
        resultado = calculo + "-" + "Aprovado"
        
    } else {
         resultado = calculo + "-" + "Reprovado"
    }
document.getElementById("result").innerText= resultado
    
}
*/
