var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render( 'index', 
  			  { 
  			  	title: 'Express',
  			  	body: 'i am starter of Express' 
  			  });
});

module.exports = router;
