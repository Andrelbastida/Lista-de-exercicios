// Crie um vetor com números diversos e verifique se existe e em qual posição está localizado 
// determinado número neste vetor
/*
var num = [2,51,2,3,4,6,334,23,432,43,12]
var n = 7
// Resposta esperada : Número 7 não encontrado
    n = 2*/
// Resposta esperada : Número 2 nas posições: 0 , 2

var vetor = [2,51,2,3,4,6,334,23,432,43,12]
console.log(pesquisar(13))

function pesquisar (n){
    for (let i = 0 ; i< vetor.length; i++){
        if(vetor[i] == n)
            return `O número ${n} foi encontrado na posição ${i}`
            // return ("O número "+n+" foi encontrado na posição " + i )
    }
    return ("O numero " +n+ " não foi encontrado")
    // return `O numero ${n} não foi encontrado`

}