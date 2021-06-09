const http = require('http')
const fs = require('fs')
const pull = require("./pullLists.js");

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream('index.html').pipe(res)
})

pull.results;

server.listen(process.env.PORT || 3000)
