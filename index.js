const express = require('express');
// const data = require('/data/db.js');
const db = require('./data/db.js');

const server = express();
// server.use(express.json())

server.get('/users', (req, res) => {
    db.find()
        .then(user => {
            res.status(200).json(user);
        })
        .catch(res.status(500), error => console.log(error));

})

server.listen(8000, () => console.log('API running on port 8000'));