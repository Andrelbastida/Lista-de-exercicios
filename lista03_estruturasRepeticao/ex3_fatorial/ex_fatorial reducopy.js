var btn = document.getElementById("btnCalcular")
btn.addEventListener("click", executar)

function executar(){
    let n1 = parseInt(document.getElementById('n1').value)
    let result = document.getElementById('result')
    result.innerText = calcular(n1)

        
function calcular(n){
    
    if(n==0)    
        return 1
        
        return n*calcular(n-1)   

    }
}
