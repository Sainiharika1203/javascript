class drf{
    fullstack(){
        document.write("Fullstack developer from drf")
    }
}
class techjobs extends drf{
    fullstack(){
        document.write("fullstack developer from techjobs");
    }
}
var obj =[new techjobs(),new drf()];
obj.forEach((x) => {
    x.fullstack();
    
});