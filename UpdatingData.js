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

    db.collection('movie').findOneAndUpdate({
        _id: new ObjectID('5c1235f38fd04b2a0039b612')
    }, {
        $set : {
            completed: true
        }
    }).then((result) => {
        console.log(result);
    }, {
        retunOriginal: false
    }).then((result) => {
        console.log(result);
    });
});