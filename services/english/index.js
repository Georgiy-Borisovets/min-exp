require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;
const router = require('./routes');

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

app.use(bodyParser.json());
app.use('/api/english', router);

//DEFAULT ERROR HANDLER
app.use(function (err, req, res, next) {
    res.status(500).send(err);
});

app.listen(port, () => {
    console.log('server is listening on: ' + port);
});
