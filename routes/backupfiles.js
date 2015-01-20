//backupFiles.js
var fs = require('fs');

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var fileList = ["123","456","789"];
  var fileArr = [];
  var files = fs.readdirSync('.');
  for(var i=0;i<files.length;i++){
  	fileArr.push(files[i]);
  } 
  res.json(fileArr);
});

module.exports = router;