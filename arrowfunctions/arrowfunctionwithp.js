            op=prompt("enter operation");
            a=parseInt(prompt("enter a"));
            b=parseInt(prompt("enter b"));
            if(op=="1"){
                add=(a,b)=>a+b
                document.write(add(a,b));
            }
            else if(op=="2"){
                 sub=(a,b)=>a-b
                document.write(sub(a,b));

            }
            else{
                  document.write("invalid")
            }