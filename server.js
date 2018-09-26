var express = require('express');
var app = express();

var port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    console.log('Hello from Server!!');
    res.render('./public/index.html');
});

app.listen(port);
console.log('Listening on server: '+ port);