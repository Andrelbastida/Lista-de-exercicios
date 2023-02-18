var btn = document.getElementById('btnCalcular')
btn.addEventListener('click',calcularValorMedia)



function calcularValorMedia(){

    let n1 = Number(document.getElementById('n1').value)
    let n2 = Number(document.getElementById('n2').value)

    let calculo = (n1 + n2) /2
   
    if( calculo >= 6 ){
        document.getElementById('result').innerHTML= calculo + " Aprovado"
    
    }else if( calculo < 6 && calculo >= 5  ){
        document.getElementById('result').innerHTML= calculo + " Recuperação"

    }else{
        document.getElementById('result').innerHTML= calculo + " Reprovado"
    }


}