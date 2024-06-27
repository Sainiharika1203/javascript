var num=prompt("enter a number")
num1=parseInt(num);
sum=" "
rem=0;
while(num1!=0)
    {
        rem=num1%10;
        num1=parseInt(num1/10);
        switch(rem){
            case 0:sum=`z`+sum;
            break;
            case 1:sum=`o`+sum;
            break;
            case 2:sum=`T`+sum;
            break;
            case 3:sum=`T`+sum;
            break;
            case 4:sum=`F`+sum;
            break;
            case 5:sum=`F`+sum;
            break;
            case 6:sum=`s`+sum;
            break;
            case 7:sum=`s`+sum;
            break;
            case 8:sum=`E`+sum;
            break;
            case 9:sum=`N`+sum;
            break;
        }
        
    }
    document.write(sum);