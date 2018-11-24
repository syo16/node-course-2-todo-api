// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDb server');


// db.collection('Todos').findOneAndUpdate({
//     _id: new ObjectID('5bf9463db044f180c6345c35')
// }, {
//     $set: {
//         completed: true
//     }
// }, {
//     returnOriginal: false
// }).then((result) => {
//     console.log(result);
// })

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5bf92557e6f5f027f4c346fa')
    }, {
        $set: {
            name: 'Shoichiro'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
    // db.close();
});