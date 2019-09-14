var fs = require('fs');
var argv = process.argv.slice(2);
if (argv && argv.length >= 2) {
  var fileInput = argv[0];
  var fileOutput = argv[1];
  readFileAsync(fileInput, function (err, data) {
    console.log(data);
  })
} else {
  console.log('Usage: node app.js INPUTFILENAME OUTPUTFILENAME');
}

function readFileAsync(file, callback) {
  fs.readFile(file, function (err, data) {
    if (err) return callback(err);
    var arrayData = data.toString().split("\n");
    callback(null, arrayData);
  });
}
