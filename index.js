const express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    port = 3000;

app.use(bodyParser.json());

app.post('/', (req, res) => {
    console.log(`Received request: ${req.body}`);
});

var server = app.listen(port, function () {
    var host = server.address().address
    var port = server.address().port

    console.log('Example app listening at http://%s:%s', host, port)
});