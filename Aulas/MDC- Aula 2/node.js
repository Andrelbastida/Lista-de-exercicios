var btn = document.getElementById("btnCalcular")
btn.addEventListener("click",mdc)

function mdc (){
        let n1 = parseInt(document.getElementById("n1").value)
        let n2 = parseInt(document.getElementById("n2").value)
        let result = document.getElementById("result")
        let ctrl

        if ( n1 > n2 ){
            // para variavel "ctrl" com valor de n2, enquanto ctrl >= 1, ctrl decrementa de 1 em 1
            for (ctrl = n2 ; ctrl >= 1 ; ctrl -- ){

                if ( n1 % ctrl == 0 && n2 % ctrl == 0){
                    result.innerText=ctrl
                    break   
                }
            }
        }else{
            for (let ctrl = n1 ; ctrl >= 1 ; ctrl -- ){
                if ( n1 % ctrl == 0 && n2 % ctrl == 0){
                    result.innerText=ctrl
                    break 
                }

        }

    }

}