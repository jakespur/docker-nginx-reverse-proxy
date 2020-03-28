const express = require('express');
const PORT = 8080;
const app = express();

app.get('/', (req, res) => {
    const channel = req.header('Distribution-Channel');
    res.send(`Hello your distribution channel is ${channel}`);
});

app.use(function (req, res, next) {
    res.status(404).send(`Sorry can't find that ${req.path}`);
});

app.listen(PORT, () => {
    console.log('http://localhost:5656');
});