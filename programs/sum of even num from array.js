let arr=[12,33,56,7,2,4,5,9];
sum=0;
for(let i=0;i<arr.length;i++)
    {
        if(arr[i]%2==0){
            sum+=arr[i]
        }
    }
    document.write(sum);