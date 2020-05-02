const express = require('express'),
    bodyParser = require('body-parser'),
    shell = require('shelljs'),
    app = express(),
    port = 3000;

app.use(bodyParser.json());

app.post('/', (req, res) => {
    console.log(`Received push from repository: ${req.body.repository.name}`);

    res.status(200);

    shell.exec(`./scripts/${req.body.repository.name}.sh`);
});

const server = app.listen(port, function () {
    const port = server.address().port

    console.log('Webhook server started at: ', port)
});