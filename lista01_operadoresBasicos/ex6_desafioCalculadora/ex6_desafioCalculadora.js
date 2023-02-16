var btnSomar = document.getElementById('btnSomar')
btnSomar.addEventListener("click",somarnumeros)

var btnSub = document.getElementById('btnSub')
btnSub.addEventListener("click",subitrairnumeros)

var btnMult = document.getElementById('btnMult')
btnMult.addEventListener("click",multiplicarnumeros)

var btnDiv = document.getElementById('btnDiv')
btnDiv.addEventListener("click",dividenumeros)



function somarnumeros(){

    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)

    let soma = n1 + n2

    let result = document.getElementById("result")
    result.innerText = soma
}
function subitrairnumeros(){

    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)

    let subtra = n1 - n2

    let result = document.getElementById("result")
    result.innerText = subtra
}
function multiplicarnumeros(){

    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)

    let multipl = n1 * n2

    let result = document.getElementById("result")
    result.innerText = multipl
}
function dividenumeros(){

    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    
    let divis = n1 / n2

    let result = document.getElementById("result")
    result.innerText = divis
}