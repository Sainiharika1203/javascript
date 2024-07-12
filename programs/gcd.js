
function gcd(a,b){
    while(b!==0){
        let temp=b;
        b=a%b;
        a=temp;
    }
    return a;
}
let num1=parseInt(prompt("enter a number1"));
let num2=parseInt(prompt("enter a number2"));
console.log(gcd(num1,num2));
