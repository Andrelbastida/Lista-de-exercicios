var btn = document.getElementById('btnCalcular')
btn.addEventListener('click',calcule)



function calcule(){

    let n1 = Number(document.getElementById('n1').value)
    let n2 = Number(document.getElementById('n2').value)


    var resultado
    if (n1 % n2 == 0){
        resultado = "N1 é Multiplo de N2"
    } else {
        resultado = "N1 não é Multiplo de N2"
    }
document.getElementById("result").innerHTML= resultado

}