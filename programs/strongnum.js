var num=prompt("enter a number")
var temp=num ;sum=0;
while(num>0){
    rem=num%10;
    let fact=1;
    for(let i=1;i<=rem;i++){
        fact=fact*i;

    }
    sum+=fact;
    num=parseInt(num/10);
}
if(parseInt(temp)==sum){
document.write("strong number")
}
else{
    document.write(" Not strong number")

}
