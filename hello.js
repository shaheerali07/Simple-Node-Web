//creating a server
const http = require("http");
var fs = require("fs");
var url = require("url");

http
  .createServer((req, res) => {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    if (filename == "./") {
      filename = "./index";
    }
    filename = filename + ".html";
    fs.readFile(filename, function(err, data) {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        return res.end("404 Not Found");
      }
      //response.writeHead(statusCode[, statusMessage][, headers])
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080);
console.log("Server runing at port 8080...");
