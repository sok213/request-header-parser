var express = require('express'),
	router = express.Router(),
	ip = require('ip'),
	os = require('os');

router.get('/', function(req, res, next) {
	res.render('index', {
		title: 'Request Header Parser Microservice',
		lang: req.headers['accept-language'].split(',')[0],
		ip: ip.address(),
		os: os.cpus()[0].model + ' ' + os.platform() + ' ' + os.arch()
	});
});

module.exports = router;