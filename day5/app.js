const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
var app = express();
const port = process.env.PORT || 3000;


app.post('/user', bodyParser.json(), function (request, response) {
  var user4 = request.body;
  fs.readFile('./user.json', function (error, data) {
    if (error) response.end(error);
    else {
      var tempData = JSON.parse(data);
      tempData['user4'] = user4;
      response.send(tempData);
    }
  })
})

app.get('/user', function (request, response) {
  fs.readFile('./user.json', function (err, data) {
    if (err) response.end(err);
    else response.end(data);
  })
})

var server = app.listen(port, function () {
  console.log(`Server run at localhost:${port}`);
})
