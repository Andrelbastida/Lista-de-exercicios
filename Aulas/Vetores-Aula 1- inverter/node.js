/* var num = [3,4,1,5,9];
var aux;

console log (num)
aux = num [0]
num [0] = num [4]
num [4] = aux

aux = num [1]
num[1] = num [3]
num [3] = aux
console.log(num)

*/

var num = [3,4,1,5,9];
var aux;

  for (var controle = 0 ; controle< (num.length-1) / 2; controle ++ ){

      aux = num [num.length-1-controle]
      num [num.length-1-controle] = num [controle]
      num [controle] = aux
  }
  console.log(num)

/*
let n1 = [3, 4, 1, 5, 9];
let aux;

for (let i = 0; i < n1.length / 2; i++) {
 aux = n1[i];
  n1[i] = n1[n1.length - 1 - i];
  n1[n1.length - 1 - i] = aux;
}

console.log(n1);

*/