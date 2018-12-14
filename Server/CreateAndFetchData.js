var mongoose = require('mongoose');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/abc');

//with Validation 
var todo = mongoose.model('movie2', {
    name: {
        type: String,
        required:true,
        minlength:1,
        trim:true
    },
    completed: {
        type: Boolean,
        default:false
    },
    completedAt: {
        type: Number,
        default:null
    }

});
//without Validation 

/*
var todo = mongoose.model('movie2', {
    name: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }

});*/
//var newTodo = new todo({
//    name: 'amit kumar'    
//})
//newTodo.save().then((docs) =>{
//    console.log(docs);
//},(e)=>{
//    console.log('not connected')
//})
var OtherTodo = new todo({
    name: 'amit',
    completed:true,
    completedAt:-1
})
OtherTodo.save().then((docs) =>{
    console.log(JSON.stringify(docs,undefined,2));
},(e)=>{
    console.log(`not connected ${e}`)
})