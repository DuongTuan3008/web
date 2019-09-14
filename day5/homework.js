var fs = require('fs');
var argv = process.argv.slice(2);
if (argv && argv.length >= 2) {
  var fileInput = argv[0];
  var fileOutput = argv[1];
  readFileAsync(fileInput, function (err, data) {
    const mappedData = mapData(data);
    writefileAsync(fileOutput, mappedData, function (err, result) {
      if (err) console.log(err);
      console.log('Finished!');
    })
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


function writefileAsync(file, data, callback){
  var appendFile = fs.createWriteStream(file, {'flags' : 'w'});
  appendFile.on('error', function(err) {
    callback(err);
  });
  for (let key in data) {
    appendFile.write(key + ' ' + data[key] + '\n');
  }
  appendFile.end();
  callback(null, data);
}

function mapData (array) {
  let result = {};
  array.forEach(val => {
    const temp = val.split(" ");
    const key = temp[0];
    const value = temp[1];
    if (result[key]) {
      result[key] += Number(value);
    } else {
      result[key] = Number(value);
    }
  })
  return result;
}