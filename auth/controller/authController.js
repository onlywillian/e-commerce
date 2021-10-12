const express = require('express');
const route = express.Router();
const User = require('../models/model');

route.post('/cadastrar', async (req, res) => {
    try {
        const userName = User.findOne(req.body.name);

        if (userName) return res.status(401).send({ error: "User already exists!" });

        const user = await User.create(req.body);

        if (!user) return res.status(500).send({ error: "User don't created!" });

        res.status(200).send({ user });

    } catch (err) {
        res.status(400).send({ err });
    }
});

route.post("/entrar", (req, res) => {
    const userName = User.findOne(req.body.name);

    if (!userName) return res.status(401).send({ error: "User already exists!" });
});

module.exports = app => app.use('/auth', route);