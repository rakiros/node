const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("bmw e46");
});

app.listen(3000, () => {
    console.log("niissaaan");
});