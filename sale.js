 

 $("#t1").click(function(){
            var amount1 = $("#a1").val();
            console.log(amount1)
            var amount2 = $("#o1").val();
            console.log(amount2)
            var result=amount1*5 + amount2*4;
           console.log(result)
           document.getElementById("totalValue").value = result;




        });
