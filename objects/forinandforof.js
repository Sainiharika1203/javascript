function person(firstname,lastname,city){
    this.firstname=firstname,
    this.lastname=lastname,
    this.city=city;
}
let p1=new person("Niha","kedarisetti","vskp")
let p2=new person("kundana","Alla","vzg")
let p3=new person("sravani","durugu","vskp")
let persons=[p1,p2,p3];
for(let p of persons){
        for(let key in p){
            document.write(key+":"+p[key]+"<br>")
        }
    }
