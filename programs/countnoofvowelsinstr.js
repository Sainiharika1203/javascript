let string=prompt("enter a string")
let vowelcount=0
let vowels="aeiouAEIOU";
for(let i=0;i<string.length;i++){
    if(vowels.includes(string[i])){
        vowelcount++
    }
}
document.write(vowelcount);