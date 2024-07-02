function mobile(Name,price,Model){
this.Name=Name;
this.price=price;
this.Model=Model;
}
let m1=new mobile("oneplus",45000,"8T");
let m2=new mobile("iphone",80000,"16plus");
let m3=new mobile("realme",150000,"4s");
let m4=new mobile("vivo",20000,"v20");
let mobiles=[m1,m2,m3,m4];
for(let m of mobiles){
        if(m.price>=40000){
            for(let key in m){
                document.write(key+":"+m[key]+"<br>")
            }
        }
}