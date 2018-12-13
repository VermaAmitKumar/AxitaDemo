
const mongoClient =require('mongodb').MongoClient;
//var user = {'name':'amit',age:28};
//var {name} = user;
//console.log(name);
mongoClient.connect('mongodb://localhost:27017/abc',(err,db)=>{
    if(err){
        console.log('Unable to connect mongodb server');
    }
    db.collection('movie').insertOne({
        text : 'demo',
        completed:false
    },(err,result)=>{
     if(err){
        console.log('not Insert');
    }   
        console.log(JSON.stringify(result.ops,undefined,2))
//        console.log(JSON.stringify(result.ops[0]._id.getTimestamp()))
    })    
    db.close();
})