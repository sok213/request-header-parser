var express = require('express'),
	router = express.Router(),
	ip = require('ip'),
	os = require('os'),
	useragent = require('useragent');

router.get('/', function(req, res, next) {
	
	var agent = useragent.parse(req.headers['user-agent']);
	console.log(req.ip);

	res.render('index', {
		title: 'Request Header Parser Microservice',
		lang: req.headers['accept-language'].split(',')[0],
		ip: req.ip,
		os: agent.toString()
	});
});

module.exports = router;