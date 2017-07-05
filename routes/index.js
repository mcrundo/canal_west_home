var express = require('express')
	, router = express.Router()
	, request = require('request')
	, tech_json = 'https://s3.us-east-2.amazonaws.com/canalweststudio/assets/data/tech.json'

/* GET home page. */
router.get('/', function(req, res, next) {
	request(tech_json, function(err, response, main) {
	var techs = [];
    var t = JSON.parse(main);
    data = t.tech
    res.render('index', data);
  });
});

module.exports = router;
