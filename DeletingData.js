const mongoClient = require('mongodb').MongoClient;
const {
    MongoClient,
    ObjectID
} = require('mongodb');

var user = {
    'name': 'amit',
    age: 28
};
var {
    name
} = user;
console.log(name);
mongoClient.connect('mongodb://localhost:27017/abc', (err, db) => {
    if (err) {
        console.log('Unable to connect mongodb server');
    }
    //   1. delete one
    //db.collection('movie').deleteOne({name:'tutorials point'}).then((result)=>{
    //   console.log(result); 
    //});
    //   2. delete many
    //db.collection('movie').deleteMany({name:'tutorials point'}).then((result)=>{
    //   console.log(result); 
    //});
//       3. find one and delete
    db.collection('movie').findOneAndDelete({name:'demo'}).then((result)=>{
       console.log(result); 
    });
});