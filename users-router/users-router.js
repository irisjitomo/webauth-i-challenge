const express = require('express');

const router = express.Router();
const bcrypt = require('bcryptjs')

const Users = require('./users-model');


// router.post('/register', (req, res) => {
//     let user = req.body;

//     const hash = bcrypt.hashSync(user.password, 8)
//     user.password = hash

//     Users.add(user)
//     .then(newUser => {
//         res.status(201).json(newUser)
//     })
//     .catch(err => {
//         res.status(500).json(err)
//     })
// })

// router.post('/login', (req, res) => {
//     let {username, password} = req.body;

//     Users.findById({username})
//     .first()
//     .then(user => {
//        if (username && bcrypt.compareSync(password, user.password)) {
//            res.status(200).json({ message: `Welcome ${user.username} your pass is ${user.password}`})
//        } else {
//         res.status(401).json({ message: 'Invalid Credentials' });
//        }
//     })
//     .catch(() => {
//         res.status(500).json({ message: "could not complete request"})
//     })
// })


module.exports = router;