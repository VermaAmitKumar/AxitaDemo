var express = require('express');
var bodyParser = require('body-parser');

var {
    mongoose
} = require('./db/mongoose');
var {
    todo
} = require('./Models/todo');
var {
    user
} = require('./Models/users');
var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    //        res.send(req.body);
    var OtherTodo = new todo({
        name: req.body.name,
        //        completed:true,
        //    completedAt:-1
    });

    OtherTodo.save().then((docs) => {
        res.send(docs);
    }, (e) => {
        res.status(400).send(e);
    });

});
app.get('/todos', (req, res) => {
    todo.find().then((todos)=>{
        res.send({todos});
    },(err)=>{
        res.status(400).send(e);
    })

});


app.listen(3000, () => {
    console.log('server starts at http:localhost/3000');

})