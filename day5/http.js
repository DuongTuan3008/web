const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Hello world');
    res.end();
  }

  else if (req.url === '/api/courses') {
    //
  }

  else {
    res.write("Not found!");
    res.end();
  }
});

server.listen(6969);