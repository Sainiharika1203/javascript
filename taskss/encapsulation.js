class drf {
    constructor(){
        var fullstack;
        var datascience;

    }
    setFullstack(fullstack){
        this.fullstack=fullstack
    }
    getFullstack(){
        return this.fullstack;

    }
    setDatascience(datascience){
        this.datascience=datascience
    }
    getDatascience(){
        return this.datascience;
        
    }
}
var d=new drf();
d.setFullstack("Fullstack with mean");
d.setDatascience("Datascience with techjobs")
document.write(d.getFullstack());
document.write(d.getDatascience());