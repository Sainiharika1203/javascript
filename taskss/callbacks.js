function greet(callme){
    document.write("helloworld");
    callme();
}
function howareyou(){
    document.write("how are you ?");
}
greet(howareyou);
setTimeout(greet,5000,howareyou)
