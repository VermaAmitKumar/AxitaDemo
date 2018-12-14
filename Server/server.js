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
var {
    ObjectId
} = require('mongodb');
var _ = require('lodash');

var app = express();

app.use(bodyParser.json());
//-------------------------------------------
app.post('/users', (req, res) => {
    var body = _.pick(req.body, ['email', 'password']);
    var user1 = new user(body);
    user1.save().then((demo) => {
        res.send(demo);
    }).catch((e) =>{
        res.status(400).send(e);
    })
});
//------------------------------------------------
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
    todo.find().then((todos) => {
        res.send({
            todos
        });
    }, (err) => {
        res.status(400).send(e);
    })

});
app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    //    res.send(id);
    if (!ObjectId.isValid(id)) {
        return res.status(404).send();
    } else {
        //        return res.send(id);

        todo.findById(id).then((todo) => {
            if (!todo) {
                return res.status(404).send();
            } else {
                res.send(JSON.stringify(todo, undefined, 2));
            }
        }).catch((e) => console.log(e));
    }
});

app.delete('/todos/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectId.isValid(id)) {
        return res.status(404).send();
    } else {

        todo.findByIdAndRemove(id).then((todo) => {
            if (!todo) {
                return res.status(404).send();
            } else {
                res.send(todo);
            }
        }).catch((e) => console.log(e));
    }
});

app.listen(3000, () => {
    console.log('server starts at http:localhost/3000');

})