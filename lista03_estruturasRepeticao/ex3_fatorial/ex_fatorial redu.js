var btn = document.getElementById("btnCalcular")
btn.addEventListener("click", executar)

function executar(){
    let n1 = parseInt(document.getElementById('n1').value)
    let n2 = n1- 1
    var result = document.getElementById('result')

    if(n1<=1){
        result.innerText= 1
    }else{
        
        result.innerText= calcular (n1,n2)
    }
}

function calcular(num1,num2){
    
    if(num2 == 0)
        return num1

    return calcular(num1 * num2, num2-1)

}
