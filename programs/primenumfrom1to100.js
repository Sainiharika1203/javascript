n=2
while(n<=100){
    count=1
    for(let i=1;i<=Math.sqrt(n);i++){
        if(n%i==0){
            count++
        }
    }
    if(count==2){
        document.write(n+"<br>")
    }
    n++;
}