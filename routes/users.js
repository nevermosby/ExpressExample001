var express = require('express');
var router = express.Router();
var Spreadsheet = require('edit-google-spreadsheet');

/* GET users listing. */
router.get('/', function(req, res, next) {
	// res.send('respond with a resource');
	// res.render( 'user',
	// 			  {
	// 			  	title: 'User page',
	// 			  	body: 'this is user page'
	// 			  });

	Spreadsheet.load({
		debug: true,
		spreadsheetId: '18nVFEidGLpqgiKhBy5KFKt40M3IwYJufTBHu84T1bVk',
		worksheetName: 'seen',

		oauth: {
			email: '309611638492-tfr2p6jjnc8hp8le5qlkt10s8arr1srn@developer.gserviceaccount.com',
			keyFile: 'public/mygoogleapi-key.pem'
		}

	}, function sheetReady(err, spreadsheet) {

		if (err) {
			throw err;
		}

		spreadsheet.receive(function(err, rows, info) {
			if (err) {
				throw err;
			}

			console.dir(rows);
			console.dir(info);

			res.json(rows);
		});

	});

});

module.exports = router;