var express = require('express'),
	ejs = require('ejs'), 
	app = express(),
	path = require('path'),
	http = require('http').Server(app),
	port = process.env.PORT || 3000,
	routes = require('./routes/index');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', express.static('public'));

app.get('/', routes);

http.listen(port, function() {
	console.log('Listening on port: ' + port);
});