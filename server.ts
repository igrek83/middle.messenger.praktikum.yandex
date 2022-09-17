const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.port || 3000;

app.use(express.static(__dirname + '/dist'));

app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname + '/dist/index.html'));
});

app.listen(PORT, function () {
    console.log(`App listening on port ${PORT}!`);
});