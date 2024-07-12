let arr=[12,54,89,76,91,14,23];
let big=arr[0];
let small=arr[0];

for(let i=1;i<=arr.length;i++){
    if(arr[i]>big){
        big=arr[i];

    }
    if(arr[i]<small){
        small=arr[i];
    }
}
    let difference=big-small;
document.write( difference);