const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/nodejsCal");

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient

// const connectionURL = "mongodb://127.0.0.1:27017/nodejsCal"
// const dbname = 'calculationHistory'

// MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
//     if(error){
//         return console.log('Unable to connect to database!')
//     }

//     const db = client.db(dbName)
// })