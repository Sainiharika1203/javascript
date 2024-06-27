let arr=[10,2,5,7,30,42]
        s=arr[0]
        for(let a of arr){
            if(a<s){
                s=a
            }
        }
        document.write(s);