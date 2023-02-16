var btn = document.getElementById("btnCalcular")
btn.addEventListener("click",calcularMedia)



function calcularMedia(){

    var n1 = Number(document.getElementById('n1').value)
    var n2 = Number(document.getElementById('n2').value)

var calculo = ( n1 + n2 ) / 2
if (calculo > 5){
    document.getElementById("result").innerText= "Aprovado"
}
}else{
    document.getElementById("result").innerText= "Reprovado"
}