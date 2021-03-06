const express = require('express');
const User = require('./data/db.js');
const server = express();
server.use(express.json())

server.get('/', (req, res) => {
    res.status(200).json({ message: 'Sanity Test. You Are Sane!!' })
})

server.get('/users', (req, res) => {
    User.find()
        .then(user => {
            res.status(200).json(user);
        })
        .catch(res.status(500), error => console.log(error));
})

server.get('/users/:id', (req, res) => {
    // res.status(200).json({ message: 'user/:id working!!' })
    console.log('this is the id', req.params.id)
    User.findById(req.params.id)
    .then(user => {
        console.log(user)
        if (user) {
            res.status(200).json(user)
        } else {
            console.log('index.js ln:27 ALERT')
            res.status(404).json({ message: 'not found'})
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            message: err.message
        })
    })
})

server.post('/users', (req, res) => {
    const newUser = req.body
    User.insert(newUser)
        .then(user => {
            res.status(201).json(user)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: err.message })
        })
})

server.put('/users/:id', (req, res) => {
    res.json({message: 'PUT update to existing user working'})
})

server.delete('/users/:id', (req, res) =>{
    res.json({message: `DELETE user with id ${req.params.id}`})
})


server.listen(6000, () => console.log('API running on port 6000'));