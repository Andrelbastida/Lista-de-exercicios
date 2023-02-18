var btn = document.getElementById('btnCalcular')
btn.addEventListener('click',calcule)



function calcule(){

    let n1 = Number(document.getElementById('n1').value)
    
    let resultado = 1
    let contador = 2
        if(n1 <= 0){
            resultado ="Informe número positivo"
        }

    while(contador <= n1){
        resultado *= contador
        contador ++
    }

   

    document.getElementById("result").innerHTML= resultado
}