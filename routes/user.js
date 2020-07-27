var express = require('express');
var db = require('../models');

var route = express.Router();

route.get('', (req, res) => {
    res.render('home')
})

route.get('/register', (req, res) => {
    res.render('registration', { messages: req.flash('info') })
})

route.post('/register', (req, res) => {
    db.user.create(req.body).then(() => {
        req.flash('info', 'Account Created')
        res.redirect('/register');
        //console.log('user created!')
    })
})

route.post('/emailtaken', (req, res) => {
    db.user.findOne({
        where: {
            email: req.body.email
        }
    }).then((user) => {
        if (Boolean(user)) {
            res.send('Email Already Taken!')
        }
    })
})

module.exports = route;