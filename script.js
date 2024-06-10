
        let btn=document.getElementById('mybtn');
        let btn2=document.getElementById('mybtn2');
        let copyDiv=document.querySelector(".copyCode");
        let rgb1="#008894";
        let rgb2="#54d542";

        const getHexValues=()=>{
            let hexaNum="0123456789abcdef";
        let colors="#";
        for(let i=0;i<6;i++){
        colors += hexaNum[Math.floor(Math.random()*16)];//usually random no.is b/t 0-1 so we multiply by 16 gives 0-15
        }
        return colors;
        };

        const handleButton1=()=>{
         rbg1=getHexValues();//let scope only upto this block
         console.log(rgb1);
         btn.innerText=rbg1;
         document.body.style.backgroundImage=`linear-gradient(to right,${rbg1},${rbg2})`;
         copyDiv.innerHTML=`background-image:linear-gradient(to right,${rgb1},${rbg2})`;
         
        };

        const handleButton2=()=>{
         rbg2=getHexValues();
         btn2.innerText=rbg2;
         document.body.style.backgroundImage=`linear-gradient(to right,${rbg1},${rbg2})`;
         copyDiv.innerHTML=`background-image:linear-gradient(to right,${rbg1},${rbg2}))`;
        };
       
        btn.addEventListener('click',handleButton1);
        btn2.addEventListener('click',handleButton2);


        copyDiv.addEventListener('click',()=>{
            navigator.clipboard.writeText(copyDiv.innerText);
            window.alert("Text copied");
            });