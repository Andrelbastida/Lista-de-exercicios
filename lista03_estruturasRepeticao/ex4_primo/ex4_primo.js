var btn = document.getElementById('btnCalcular')
btn.addEventListener('click',calcule)



function calcule(){

    let n1 = Number(document.getElementById('n1').value)
    let cont = 2
    let resultado = "Primo"

    while (cont < n1){
        if(n1 % cont == 0){
            resultado = "Não é Primo"
        }
        cont ++
    }
    

document.getElementById("result").innerHTML= resultado

}