var btn = document.getElementById('btnCalcular')
btn.addEventListener('click',calcule)



function calcule(){

    let n1 = Number(document.getElementById('n1').value)
    let n2 = Number(document.getElementById('n2').value)
    let resultado = (n1 > n2) ? n1 +" eh maior que "+ n2 : (n2 > n1) ?  n2 + " eh maior que " + n1 : n1 + " e " + n2 + " são iguais "

    document.getElementById("result").innerHTML= resultado

}