const express = require('express')
const server = express();
// const Users = require('./users-router/users-router')
const bcrypt = require('bcryptjs')

const Users = require('./users-router/users-model');

server.use(express.json())
// server.use('/api', Users)

server.get('/', (req, res) => {
    res.send('Hello')
})

server.post('/api/register', (req, res) => {
    let user = req.body;

    const hash = bcrypt.hashSync(user.password, 8)
    user.password = hash

    Users.add(user)
    .then(newUser => {
        res.status(201).json(newUser)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

server.post('/api/login', (req, res) => {
    let {username, password} = req.body;

    Users.findBy({username})
    .first()
    .then(user => {
       if (username && bcrypt.compareSync(password, user.password)) {
           res.status(200).json({ message: `Logged in ${user.id}`})
       } else {
        res.status(401).json({ message: 'You shall not pass!' });
       }
    })
    .catch(() => {
        res.status(500).json({ message: "could not complete request"})
    })
})

server.get('/api/users', protect, (req, res) => {
    Users.find()
    .then(users => {
        res.json(users)
    })
    .catch(err => {
        res.send(err)
    })
})

//custom middleWare
function protect(req, res, next) {
    const {username, password} = req.headers
    if (username, password) {
        Users.findBy({username})
        .first()
        .then(user => {
            if (username && bcrypt.compareSync(password, user.password)) {
                next()
            } else {
                res.status(401).json({error: 'you shall not pass'})
            }
        })
        .catch(() => {
            res.status(500).json({ message: "could not complete request"})
        })
    } else {
        res.status(400).json({error: 'you shall not pass'})
    }
}

const port = 7000
server.listen(port, console.log(`listening on port ${port}`))