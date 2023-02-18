var btn = document.getElementById('btnCalcular')
btn.addEventListener('click',calcule)



function calcule(){

    let n1 = Number(document.getElementById('n1').value)
    let n2 = Number(document.getElementById('n2').value)

    if (n2 < n1){
        var aux = n2
        n2 = n1
        n1 = aux
    }

    var resultado = ""

    while ( n1 < n2 ) {
        resultado += n1 + ", "
        n1++
        
    }
    resultado += n2 

document.getElementById("result").innerHTML= resultado

}