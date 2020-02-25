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
});

app.use(bodyParser.json());
router(app);

app.listen(port, () => {
    console.log('server is listening on: ' + port);
});
