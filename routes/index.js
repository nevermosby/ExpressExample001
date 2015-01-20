var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render( 'index', 
  			  { 
  			  	title: 'Intance List Page',
  			  	body: 'i am starter of Express',
  			  	// instanceList: [
  			  	// 	{
  			  	// 		name: "test001",
  			  	// 		createDate: "2015-1-1 00:00:00",
  			  	// 		status: "Running"
  			  	// 	},
  			  	// 	{
  			  	// 		name: "test002",
  			  	// 		createDate: "2015-1-2 00:00:00",
  			  	// 		status: "Inactive"	
  			  	// 	},
  			  	// 	{
  			  	// 		name: "test002",
  			  	// 		createDate: "2015-1-3 00:00:00",
  			  	// 		status: "Active"
  			  	// 	}
  			  	// ] 
  			  });
});

module.exports = router;
