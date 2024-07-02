var myvar;
        var sec=0;
        var min=0;
        var hr=0;
        function generate(){
            myvar=setInterval(start,1000);
        }
        function start(){
            sec++;
            if(sec==60){
                min++;
                sec=0;
            }
            else if(min==60){
                hr++;
                min=0;
                sec=0;
            }
            let hour=hr.toString().padStart(2,"0");
            let minute=min.toString().padStart(2,"0");
            let second=sec.toString().padStart(2,"0");
            document.getElementById("time").innerHTML=`${hour}hr : ${minute}min : ${second}secs`;
        }
        function reset(){
            document.getElementById("time").innerHTML=`00hr : 00min : 00secs`;
        }
        function pause(){
            clearInterval(myvar);
        }