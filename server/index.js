const express = require('express');

const app = express();


app.get('/', (req, res, next) => {
    res.send("Hello World");
});
//No route found handler
app.use((req, res, next) => {
    res.status(404);
    res.json({
        message: 'Error. Route not found'
    });
});

module.exports = app;