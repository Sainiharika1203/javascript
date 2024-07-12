let num=prompt("enter a number");
let checknum=new Promise((resolve, reject) => {
    if(num%2==0){
        resolve("the number is even so promise fulfilled")
    }
    else{
        reject("the number is odd so promise rejected")
    }
});
checknum
.then((num)=>document.write(num))
.catch((num)=>document.write(num))