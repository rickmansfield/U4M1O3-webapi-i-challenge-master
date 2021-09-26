const express = require('express');
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

server.post('/users', (req, res)=> {
    db.insert()
    .then(user => {
        res.status(201).json({url:'/users', operation: 'POST', user});
    })
    .catch(res.status(500), error => console.log(error))
})

server.listen(8000, () => console.log('API running on port 8000'));