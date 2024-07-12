class drf{
    constructor(firstname,lastname,rollnum){
        this.firstname=firstname;
        this.lastname=lastname;
        this.rollnum=rollnum
    }
    getfulldetails(){
        return this.firstname+" " +this.lastname+" "+this.rollnum
    }
    
}

var stu1=new drf("niha","kedarisetti",123);
document.write(stu1.getfulldetails()+"<br>")