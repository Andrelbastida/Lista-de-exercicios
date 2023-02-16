// Tipos de VARIÁVEIS :
//    -var : variávl global , terá o mesmo valor sempre em qualquer bloco.
//    -let : variável local (só existe dentro da função (setor) a qual é chamada )

var btn = document.getElementById("btnCalcular")
btn.addEventListener("click",calcularMedia)

function calcularMedia(){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)

    let media = (n1 + n2)/2

    let result = document.getElementById("result")
    result.innerText = media 
// esta "let" Também pode ser escrita como :
//    document.getElementById("result").innerText = media 

}
//_______!!!!____________________!!!!____________________!!!!
// FUNÇÂO "calcularMedia()" também pode ser escrita de modo REDUSIDO:
/*
function calcularMedia(){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)

    document.getElementById("result").innerText = (n1 + n2)/2
    */