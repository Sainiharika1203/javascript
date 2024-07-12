class student{
    constructor(name,marks){
        this.name=name;
        this.marks=marks;
    }
}
let students=[
    new student(`john`,90),
    new student(`jane`,67),
    new student(`alice`,99),
];
let highestmarks=0;
let higheststudent=null;
for(let i=0;i<students.length;i++)
{
    if(students[i].marks>highestmarks){

   
        highestmarks=students[i].marks;
        higheststudent=students[i];
}
}
document.write(higheststudent.name)
document.write(higheststudent.marks)