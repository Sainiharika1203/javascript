function greet(callme){
    document.write("helloworld");
    setTimeout( callme,5000)
}
function howareyou(){
    document.write("how are you ?");
}

setTimeout(greet,5000,howareyou)
