const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("bmw e46");
});

const port = process.env.port || 3000;
app.listen(port, () => {
    console.log("niissaaan");
});