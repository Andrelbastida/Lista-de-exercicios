var btn = document.getElementById("btnCalcular")
btn.addEventListener("click",calcularMedia)

function calcularMedia(){

let n1 = Number(document.getElementById("n1").value)
let n2 = Number(document.getElementById("n2").value)

let media = (n1+(n2*2))/3

// variavel = (condição) ? verdadeiro : falso       : 
    media =(media > 10) ? 10 : media  /* -----------
variavel = é maior que 10 ?  se SIM escrever "10" : se NÃO escrever "media" 
*/

    let result = document.getElementById("result")
    result.innerHTML = media

// esta "let" Também pode ser escrita como :
//    document.getElementById("result").innerText = media 

}


//_______!!!!____________________!!!!____________________!!!!
// FUNÇÂO "calcularMedia()" também pode ser escrita de modo REDUSIDO:
/*
function calcularMedia(){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)

    document.getElementById("result").innerText = (n1+(n2*2))/3
    */