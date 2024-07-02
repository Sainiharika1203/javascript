//  Given an array of objects representing students, use the map method to create a new array of objects where each object has an additional property isAdult that is true if the student's age is 18 or above, and false otherwise.

// students = [
//   { name: 'John', age: 17 },
//   { name: 'Jane', age: 19 },
//   { name: 'Jack', age: 18 },
// ];

// output : 
// [
//   { name: "Alice", age: 17, isAdult: false },
//   { name: "Bob", age: 18, isAdult: true },
//   { name: "Charlie", age: 19, isAdult: true }
// ] 
students = [
      { name: 'John', age: 17 },
      { name: 'Jane', age: 19 },
      { name: 'Jack', age: 18 },
    ];
 st=students.map((s)=>{
    
return{
    name:s.name,
    age:s.age,
    isAdult:s.age>=18
}
}
 )
 console.log(st);
//  for(let s of st)
//     {
//         for(let key in s)
//             {
//                 document.write(key+s[key]+"<br>");
//             }
//     }

