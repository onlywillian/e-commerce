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

// API end-point
app.get("/api", (req, res) => {
    res.json({ message: "Vai se fuder" });
});

app.listen(PORT, () => console.log('listening 3333'));