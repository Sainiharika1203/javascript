let num=prompt("enter a number")
let temp=num;
let rem=" " ,sum=" ";
while(num>0){
    rem=num%10;
sum+=rem;
num=parseInt(num/10);
}
if(parseInt(sum)==temp){ 
    document.write(sum+"palindrome");
}
else{
    document.write(sum+"not palindrome");
}