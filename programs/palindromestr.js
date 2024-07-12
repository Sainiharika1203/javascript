const user=prompt("enter a string ");
let isPalindrome=true;
for(let i=0;i<user.length/2;i++){
    if(user[i]!==user[user.length-i-1]){
        isPalindrome=false;
        break
    }
}
alert(isPalindrome);
