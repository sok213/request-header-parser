var express = require('express'),
	router = express.Router(),
	ip = require('ip'),
	os = require('os'),
	useragent = require('useragent');

router.get('/', function(req, res, next) {
	var agent = useragent.parse(req.headers['user-agent']);
	res.render('index', {
		title: 'Request Header Parser Microservice',
		lang: req.headers['accept-language'].split(',')[0],
		ip: req.header('x-forwarded-for') || req.connection.remoteAddress,
		os: agent.toString().split('/')[0] + '/' + 
			agent.toString().split('/')[1].substring(0, agent.toString().split('/')[1].length - 5)
	});
});

module.exports = router;