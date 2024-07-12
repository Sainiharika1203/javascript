let result=new Promise((resolve, reject) => {
    setTimeout(()=>{
        reject("promise is rejected")
    },3000)
})
result.then((data)=>{
    console.log(data)
})
result .catch((err)=>{
    console.log(err)
})
console.log("end of code")