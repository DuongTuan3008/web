const express = require('express');
var app = express();
const port = 3000;

app.get('/hello', function (request, response) {
  response.end("Pham Bao Ngoc");
})

const server = app.listen(port, function () {
  console.log(`Server run at localhost:${port}`);
})
