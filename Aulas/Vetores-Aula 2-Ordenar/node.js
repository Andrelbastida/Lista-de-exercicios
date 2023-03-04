//  Ordenar o Vetor em ordem crescente sem usar .sort
var num = [3,6,1,7,9,4,2]
var aux;

for (var contAux = 0 ; contAux< num.length; contAux ++ ){
      for (var cont = 0 ; cont < num.length; cont ++){
      
      if(num [cont] > num[cont+1]){
            aux = num[cont]
            num [cont] = num[cont + 1]
            num [cont + 1] = aux
      }
}
console.log(num)
}
