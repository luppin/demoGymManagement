
 var addBtn = document.getElementById('add');
 var updateBtn = document.getElementById('update');
 var deleteBtn = document.getElementById('delete');


function getData(){
    axios.get('http://localhost:3000/users').then(function(res){
        var list = res.data
        console.log(list)
        render(list) 
     })
}


 function render(users){
     var table = document.getElementById('table');
     var content = users.map(function(item){
     console.log(item.id)
    
         return '<tr>' + '<td>' + item.id + '</td>'
                       + '<td>' + item.name + '</td>'
                       + '<td>' + item.address + '</td>'
                       + '</tr>'

     });
     console.log(content)
     table.innerHTML = '<tr>' + '<td>' + 'ID' + '</td>'
     + '<td>' + 'User Name' + '</td>'
     + '<td>' + 'Address' + '</td>'
     + '</tr>'+ content.join(' ')
 }


 
 


 addBtn.addEventListener('click', addUser);
 updateBtn.addEventListener('click', updateUser);
 deleteBtn.addEventListener('click', deleteUser);
 var inputName =document.getElementById('inputName').value;
    var userAddress =document.getElementById('address').value;

 function addUser (){
   console.log(inputName)
    axios.post('http://localhost:3000/users',  {
        name: inputName,
        address: userAddress,
      })
    .then(function (res) {
      console.log(res.data);
      getData();
      
    })
    
 }

 function updateUser (){
    var inputId =document.getElementById('inputId').value;
    var inputName =document.getElementById('inputName').value;
    var userAddress =document.getElementById('address').value;
    axios.put('http://localhost:3000/users/'+ inputId,  {
        name: inputName,
        address: userAddress
      })
    .then(function (res) {
      console.log(res.data);
      getData();
      
    })

 }

 function deleteUser (){
    var inputId =document.getElementById('inputId').value;
    console.log(inputId);
    axios.delete('http://localhost:3000/users/'+ inputId)
    .then(function (res) {
      console.log(res.data);
      getData();
    })
  
 }




    getData();
