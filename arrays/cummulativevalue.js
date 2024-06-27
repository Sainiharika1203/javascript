let arr=[10,3,2,4,5,7];
let newarr=arr.filter((a)=>a%2==0)
document.write(newarr.reduce((a,b)=>a+b))