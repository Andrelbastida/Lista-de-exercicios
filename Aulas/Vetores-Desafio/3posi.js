
var vetor = [2,51,2,3,4,6,334,23,432,43,12]
console.log(vetor)


while(vetor.indexOf(2)!=-1) {
        console.log (vetor.indexOf(2))
        vetor[vetor.indexOf(2)]="x"
    }

    console.log(vetor.indexOf(2))

    
function pesquisar (n){
    let aux = [] ;
/*
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
*/
}