userage=parseInt(prompt("enter a number"));
let checkuser=new Promise((resolve, reject) => {
    if(userage>=21)
    {
        resolve("welcome to the club");

    }
    else{
        reject("you are not allowed");
    }
});
checkuser
.then((msg)=>document.write(msg))
.catch((msg)=>document.write(msg))