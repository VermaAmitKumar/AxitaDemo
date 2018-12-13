const mongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

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
    /*db.collection('movie').find(
        {_id: new ObjectID('5c1236150343c93558f4ba68')}
    ).toArray().then((docs) =>{
        console.log('movie');
     console.log(JSON.stringify(docs,undefined,2))
    },(err)=>{
        console.log(`unable to fetch data `,err);
    });*/
    
    db.collection('movie').find( ).count().then((count) =>{
        console.log(`total count data ${count}`);
//     console.log(JSON.stringify(docs,undefined,2))
    },(err)=>{
        console.log(`unable to fetch data `,err);
    })
    
});
