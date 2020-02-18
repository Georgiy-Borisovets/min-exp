const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

require('dotenv').config();

const router = require('./routes');
const app = express();
const port = process.env.PORT || 3000;

let db;
MongoClient.connect(process.env.DATABASE_URL, function(err, database) {
    console.log('test', err, database);
    //TODO when to close connection?
    db = database;
});

app.use(bodyParser.urlencoded({extended: true}));

router(app, db);

app.listen(port, function() {
    console.log('server is listening on: ' + port);
});