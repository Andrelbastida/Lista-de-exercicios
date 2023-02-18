var btn = document.getElementById("btnCalcular")
btn.addEventListener("click",calcularPolegada)

function calcularPolegada(){

    let milimetros = Number(document.getElementById("n1").value)

    let polegada = milimetros / 25.4 

    let result = document.getElementById("result")
    result.innerHTML = polegada

}