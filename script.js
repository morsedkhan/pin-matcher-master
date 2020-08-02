const btnGenerate = document.getElementById("btn-generateNumber");
        btnGenerate.addEventListener("click",function(){
        const randomNumber = Math.random()*10000;
        const randomResult = Math.round(randomNumber);
        document.getElementById("get-randomNumber").value = randomResult;

        }) 

        document.getElementById("submitBtn").addEventListener("click",function(){
            const randomNumberShow = document.getElementById("get-randomNumber").value;
            const inputNumber = document.getElementById("numberView").value;

            if(randomNumberShow == inputNumber && randomNumberShow != 0 ){
                const submitOutput = document.getElementById("success");
                submitOutput.style.display= "block";
            }

            if(randomNumberShow != inputNumber || randomNumberShow == 0){
                const submitOutput = document.getElementById("error");
                submitOutput.style.display="block";
            }


        })
