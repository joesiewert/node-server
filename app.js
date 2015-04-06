var http = require('http');

var server = http.createServer(function(req, res) {
  router('/kittens', function() {
    res.end('Meow!');
  }, req)

  res.end('No kittens :(');
});

function router(path, callback, req) {
  if (req.url === path) {
    callback();
  }
}

server.listen(7001);
