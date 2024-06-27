let num=prompt("enter a number");
let temp=num;
let count=0;
while(temp!=0)
{
    temp=parseInt(temp/10);
    count++;
}
temp=num;
let sum=0;
while(temp!=0)
{
    let rem=temp%10;
    sum=Math.pow(rem,count)

    temp=parseInt(temp/10);

}
if(sum==num)
{
    document.write("Armstrong number")
}
else{
    document.write("Not Armstrong")
}