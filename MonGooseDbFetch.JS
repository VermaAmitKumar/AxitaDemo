var {
    mongoose
} = require('./Server/Db/mongoose');
var {
    todo
} = require('./Server/Models/todo');

var id = '5c1337736fda8a2817369d0a';

//todo.find({
//    _id:id
//}).then((docs)=>{
//    console.log('docs',docs);
//})


//todo.findOne({
//    _id:id
//}).then((docs)=>{
//    console.log('docs',docs);
//})

//todo.findById(id).then((docs) => {
// if(!todo){
//     return console.log('id not found');
// }
//    console.log('docs', docs);
//}).catch((e)=>console.log(e));

todo.findById(id).then((todo) => {
 if(!todo){
     return console.log('id not found');
 }else{
//    console.log('docs', todo); 
     console.log(JSON.stringify(todo,undefined, 2));     
 }
})
//    .catch((e)=>console.log(e));