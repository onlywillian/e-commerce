const express = require('express');
const route = express.Router();
const User = require('../models/model');

route.post('/cadastrar', async (req, res) => {
    try {
        const user = await User.create(req.body);

        res.status(200).send({ user });
    } catch(err) {
        res.status(400).send({ err }); 
    }
});

module.exports = app => app.use('/auth', route);