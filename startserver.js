var express = require('express');
var app = express();

console.log ("PORT: " + process.env.PORT);

app.use(express.static(__dirname + '/public'));

app.get('/provider', function (req, res) {
    res.send(process.env.PROVIDER);
});

app.listen(process.env.PORT || 3000);
