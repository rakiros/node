const express = require('express');
const app = express();

// var mysql = require('mysql');

// var connection = mysql.createConnection({
//   host     : process.env.RDS_HOSTNAME,
//   user     : process.env.RDS_USERNAME,
//   password : process.env.RDS_PASSWORD,
//   port     : process.env.RDS_PORT
// });

// connection.connect(function(err) {
//   if (err) {
//     console.error('Database connection failed: ' + err.stack);
//     return;
//   }

//   console.log('Connected to database.');
// });

// connection.end();

app.get('/', (req, res) => {
    res.send("bmw e46");
});

const port = process.env.port || 3000;
app.listen(port, () => {
    console.log("niissaaan");
});