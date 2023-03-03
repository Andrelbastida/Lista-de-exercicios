var btn = document.getElementById("btnCalcular")
btn.addEventListener("click", executar)

function executar(){
    let n1 = parseInt(document.getElementById('n1').value)
    let res = 1
    let result = document.getElementById("result")

    while (n1>=1){
        res = res * n1
        n1--
       
    }
    result.innerText = res 
}