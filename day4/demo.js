var fs = require('fs');
var content = fs.readFileSync('text.txt').toString();
console.log(content);