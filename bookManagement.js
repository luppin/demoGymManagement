const table = require('table');
const fs = require('fs')
const readLineSync = require ('readLine-Sync');
const { config } = require('process');
let data,
  output,
  options;
 

 
options = {
  columns: {
    1: {
      width: 20
    },
    2: {
        width: 10
      },
    3: {
        width: 10
    }
  }
};
 




function loadByName(name){
  data = [['BookID','Name of book', 'Status', 'Shelf']];
  var bookContent = fs.readFileSync('./bookdata.json')
  books = JSON.parse(bookContent);
  return bookTable = books.map (function(book){
    if(book.name === name){
    var tranferContent = [];
     tranferContent = [book.bookId, book.name, book.status, book.shelf] 
   
    data.push(tranferContent)
    
    // console.log(tranferContent);
    }
    output =table.table(data, config);
});
};

function loadByShelf(shelf){
  data = [['BookID','Name of book', 'Status', 'Shelf']];
  var bookContent = fs.readFileSync('./bookdata.json')
  books = JSON.parse(bookContent);
  return bookTable = books.map (function(book){
    if(book.shelf === shelf){
    var tranferContent = [];
     tranferContent = [book.bookId, book.name, book.status, book.shelf] 
   
    data.push(tranferContent)
    
    // console.log(tranferContent);
    }
    output =table.table(data, config);
});
};



function loadRenter(){
     data = [['Renter ID','Name', 'Date expire']];
    var renterContent = fs.readFileSync('./renterData.json')
    renters = JSON.parse(renterContent);
    return renterTable = renters.map(function(renter){
        var tranferContent = [];
        tranferContent = [renter.id, renter.name, renter.overdue,] 
      
       data.push(tranferContent)

      //  console.log(tranferContent);
    })
   
};

// function showRenter(){
//   console.log('1. Find renter by name:');
//   console.log('2. Find book by shelf:')
//   console.log('3. Back to menu.');
//   var option =  readLineSync.question('->');
//   switch(option){
//     case '1':
//       var name = readLineSync.question('Enter name of renter:')
//        loadByName(name);
//        console.log(output);
//        showBook();
//     case '2':
//         var shelf = readLineSync.question('Enter shelf:')
//        loadByShelf(shelf);
       
//          showBook();
//    case '3':
//           showMenu();
//           break;
//       default:
//           console.log('Chose wrong option!')
//           showMenu();
//           break;     
       
//   }
// }

function showBook(){
  console.log('1. Find book by name:');
  console.log('2. Find book by shelf:')
  console.log('3. Back to menu.');
  var option =  readLineSync.question('->');
  switch(option){
    case '1':
      var name = readLineSync.question('Enter name of book:')
       loadByName(name);
       console.log(output);
       showBook();
    case '2':
        var shelf = readLineSync.question('Enter shelf:')
       loadByShelf(shelf);
       
         showBook();
   case '3':
          showMenu();
          break;
      default:
          console.log('Chose wrong option!')
          showMenu();
          break;     
       
  }
}



 
function showMenu(){
    console.log('1. Show books.');
    console.log('2. Show renters.');
    console.log('3. Register to borrow book')
    console.log('4. Exit.');
    var option = readLineSync.question('> ');
    switch(option) {
        case '1':
            showBook();  
            output = table.table(data, options);
  console.log(output)
            showMenu();
            break;
        case '2':
            loadRenter();
            output = table.table(data, options);
            console.log(output)
            showMenu();
            break;
        case '4':
            exit();
            break;
        default:
            console.log('Chose wrong option!')
            showMenu();
            break;            
    }  
}
function exit(){

}
showMenu()
// function main(){
    
// }