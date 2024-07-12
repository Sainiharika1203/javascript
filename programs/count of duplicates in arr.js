let arr=[1,2,3,4,4,4,5,6,5,3];
let duplicates=0;
for(let i=0;i<arr.length;i++){
    for(j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j]){
            duplicates++;
            break;
        }
    }
}
document.write(duplicates);