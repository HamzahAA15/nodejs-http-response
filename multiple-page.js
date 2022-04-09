const http = require("http");
const fs = require("fs");
const url = require("url");
const laptop = require("./laptop.json");
const port = 8000;

const server = http.createServer((request, response) => {
  const requestUrl = url.parse(request.url).pathname;

  if (requestUrl === "/") {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(laptop));
  } else if (requestUrl === "/tentang-saya") {
    fs.readFile("./tentang-saya.html", null, (error, data) => {
      if (error) {
        response.writeHead(404);
        response.write("not found");
      } else {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(data);
      }
      response.end();
    });
  } else {
    response.writeHead(404);
    response.write("not found");
    response.end;
  }
});

server.listen(port, () => {
  console.log("server listening on port:", port);
});
