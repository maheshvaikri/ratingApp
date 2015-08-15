var express = require('express');
var app = express();
var bodyParser = require('body-parser');
//var methodOverride = require('method-override');

var port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(methodOverride('X-HTTP-Method-Override'));

app.use(express.static(__dirname + '/public'));

require('./app/routes')(app);

app.listen(port);

console.log('Listen on port ' + port +'. The App is now reachable on localhost:8080.');

exports = module.exports = app;
