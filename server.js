const express = require("express");
const app = express();
const consign = require('consign');

const PORT = process.env.PORT || 3333;

app.use(express.json());
app.use(express.urlencoded());

consign({ cwd: 'api'})
    .then('data')
    .then('controllers')
    .then('routes')
    .into(app);

require('./auth/controller/authController')(app);

app.listen(PORT, () => console.log('listening 3333'));