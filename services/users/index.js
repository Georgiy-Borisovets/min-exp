const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

require('dotenv').config();

const router = require('./routes');
const app = express();
const port = process.env.PORT || 3000;


mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

app.use(bodyParser.json());
router(app);

//DEFAULT ERROR HANDLER
app.use(function (err, req, res, next) {
    res.status(500).send(err);
});

app.listen(port, () => {
    console.log('server is listening on: ' + port);
});
