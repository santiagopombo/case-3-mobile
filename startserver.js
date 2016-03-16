var express = require('express');
var app = express();

var aport = process.env.PORT || 8080;
console.log ("PORT: " + aport);

app.use(express.static(__dirname + '/public'));

app.get('/provider', function (req, res) {
    res.send(process.env.PROVIDER);
});

app.listen(process.env.PORT || 8080);
