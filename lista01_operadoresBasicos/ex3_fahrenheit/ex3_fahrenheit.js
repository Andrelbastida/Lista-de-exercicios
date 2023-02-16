var btn = document.getElementById("btnCalcular")
btn.addEventListener("click",calcularTemperatura)


function calcularTemperatura(){
    let n1= Number(document.getElementById("n1").value)

    let temperatura = n1 * 1.8 + 32

    let result = document.getElementById("result")
    result.innerText = temperatura
}
