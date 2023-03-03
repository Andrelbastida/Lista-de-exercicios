var btn = document.getElementById("btnCalcular")
btn.addEventListener("click", executar)

function executar(){
    let n1 = parseInt(document.getElementById('n1').value)
    let res = 1
    let result = document.getElementById("result")

    for (let i = n1 ; i >= 1 ; i--){
        res = res * i
    }
    result.innerText = res 
}