const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const router = require('./routes');
const port = process.env.PORT || 3000;


mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

app.use(bodyParser.json());
app.use('/api/auth', router);

//DEFAULT ERROR HANDLER
app.use(function (err, req, res, next) {
    res.status(500).send(err);
});

app.listen(port, () => {
    console.log('server is listening on: ' + port);
});
