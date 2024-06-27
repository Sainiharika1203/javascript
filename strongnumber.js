var num=prompt("enter a number");
            let temp=num;
            var sum=0;
            while(num>0)
            {
                rem=num%10;
                let fact=1;
                for(i=1;i<=rem;i++){
                    fact=fact*i;
                }
                sum+=fact;
                num=parseInt(num/10);
            }
            if(temp==sum){
                document.write("strong number")
            }
            else{
                document.write(" Not strong number")
            }