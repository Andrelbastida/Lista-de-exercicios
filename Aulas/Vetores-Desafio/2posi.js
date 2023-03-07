// Crie um vetor com números diversos e verifique se existe e em qual posição está localizado 
// determinado número neste vetor
/*
var num = [2,51,2,3,4,6,334,23,432,43,12]
var n = 7
// Resposta esperada : Número 7 não encontrado
    n = 2*/
// Resposta esperada : Número 2 nas posições: 0 , 2
var vetor = [2,51,2,3,4,6,334,23,432,43,12]
console.log(pesquisar(4))

function pesquisar (n){
    let aux = [] ;

    for (let i = 0 ; i< vetor.length; i++){
        if(vetor[i] == n)
            aux.push(i)  
            
        }
        if(aux.length==0 ){
            return `O número ${n} não foi encontrado`
        }
        if(aux.length==1){
            return ("O número "+n+" foi encontrado na posição "+ aux )
        }
            return ("O número "+n+" foi encontrado nas posições "+ aux.join('-') )

}