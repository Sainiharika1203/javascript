var myvar;
function generate(){
    myvar=setInterval(addcontent,1000)

}
function addcontent(){
    document.getElementById("myh1").innerHTML+="Hello World";

}
addcontent();
function stopcontent(){
    clearInterval(myvar)
}