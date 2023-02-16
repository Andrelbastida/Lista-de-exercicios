var btn = document.getElementById("btnCalcular")
btn.addEventListener("click",calcularkm)

function calcularkm(){

    let milhas = Number(document.getElementById("n1").value)

    let calculo = milhas * 1.60934

    let resultado = document.getElementById("result")
    resultado.innerText = calculo
}