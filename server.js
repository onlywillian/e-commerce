const express = require("express");
const app = express();

const PORT = process.env.PORT || 3333;

// API end-point
app.get("/api", (req, res) => {
    res.json({ message: "Hello from the server!" });
});

app.listen(PORT, () => console.log('listening 3333'));