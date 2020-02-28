const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const mockTodos = (n) => {
    const res = [];
    for (let i = 1; i <= n; i++) {
        const todo = {
            id: i,
            desc: `Todo №${i} description`,
        };
        res.push(todo);
    }
    return res;
};

app.get('/api/test/todos', (req, res) => {
    res.json(mockTodos(10));
});

app.listen(port, () => {
    console.log('test server is listening on: ' + port);
});
