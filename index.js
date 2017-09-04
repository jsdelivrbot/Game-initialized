var express = require('express')
var app = express()
var http = require("http");
const fs = require('fs');


app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World!')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})

app.get('/file', function(request, response){
  response.sendfile('ComputerGeek.html');
});

http.createServer(function(req, res){
    fs.readFile('ComputerGeek.html',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });
}).listen(3500);