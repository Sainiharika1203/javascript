
function generatetable(data){
   let table= `<table>`;
    
        table+=`<tr>
            <th>userId</th>
            <th>id</th>
            <th>title</th>
            <th>body</th>
        </tr>`;
        data.forEach((item)=>{
            table+=`<tr> 
                <td>${item.userId}</td>       
                <td>${item.id}</td>
                <td>${item.title}</td>
                <td>${item.body}</td>
            </tr>`
        })
        table+=`</table>`
}

fetch('https://jsonplaceholder.typicode.com/posts')
.then((res)=>res.json())
.then((data)=>{
    console.log(data)
        document.getElementById("table-container").innerHTML=generatetable(data);
    });




