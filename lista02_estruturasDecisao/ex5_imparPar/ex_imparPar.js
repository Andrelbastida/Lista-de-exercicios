var btn = document.getElementById('btnCalcular')
btn.addEventListener('click',calcule)



function calcule(){

    let n1 = Number(document.getElementById('n1').value)
    


    var resultado
    if (n1 %2 == 0){
        resultado = "Par"
    } else {
        resultado = "Impar"
    }
document.getElementById("result").innerHTML= resultado

}   