// Given an array of employee objects, each with name and salary properties, print the names of employees in ascending order who earn more than a specified amount given by the user.

// const employees = [
//   { name: 'Alice', salary: 50000 },
//   { name: 'Bob', salary: 60000 },
//   { name: 'Charlie', salary: 40000 },
// ];
minsalary=prompt("enter a salary");
minsalary=parseInt(minsalary);
const Employees = [
    { name: 'Alice', salary: 50000 },
    { name: 'Bob', salary: 60000 },
    { name: 'Charlie', salary: 40000 },
  ];
  Employees.sort((a, b) => (a.name)==(b.name));
  Employee= Employees.filter((e) => e.salary > minsalary);
  for(let e of Employee){
    document.write(e.name+"<br>")
  }