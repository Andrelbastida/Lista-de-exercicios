var btn = document.getElementById("btnCalcular")
btn.addEventListener("click",calcular)

var result = document.getElementById("result")

function calcular (){
        let n1 = parseInt(document.getElementById("n1").value)
        let n2 = parseInt(document.getElementById("n2").value)      

        if ( n1 > n2 ){

            mdc(n1,n2)

        }else{
            mdc(n2,n1)
        }

    }

    function mdc(maior , menor){
        

        for (let ctrl = menor ; ctrl >= 1 ; ctrl -- ){
            if ( maior % ctrl == 0 && menor % ctrl == 0){
                result.innerText=ctrl
                break 
            }

        }
    }