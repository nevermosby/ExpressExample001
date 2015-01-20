//backupFiles.js
var fs = require('fs');

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // var fileList = ["123","456","789"];
  // var fileArr = [];
  // var files = fs.readdirSync('.');
  // for(var i=0;i<files.length;i++){
  // 	fileArr.push(files[i]);
  // } 
	
	var result = '';

	var spawn = require('child_process').spawn;

	var ls    = spawn('ls', ['-lh', '/usr']); // the second arg is the command options

	ls.stdout.on('data', function (data) {    // register one or more handlers
	  console.log('stdout: ' + data);
	  result += data;
	});

	ls.stderr.on('data', function (data) {
	  console.log('stderr: ' + data);
	});

	ls.on('exit', function (code) {
	  console.log('child process exited with code ' + code);
	});

	
	var exec = require('child_process').exec;
	/*
	var child = exec('./public/test.sh' + " helloworld~");
	child.stdout.on('data', function(data) {
    	console.log('stdout: ' + data);
    	result+=data;
	});
	child.stderr.on('data', function(data) {
    	console.log('stderr: ' + data);
	});
	child.on('close', function(code) {
	    console.log('closing code: ' + code);
	});
	*/

	exec('./public/test.sh helloworld!!!', function (err, stdout, stderr) {
	    if (err) {
	    	console.err("error: " + err);
	    };

	    //Print stdout/stderr to console
	    console.log(stdout);
	    console.log(stderr);

	    //Simple response to user whenever localhost:8888 is accessed
	    res.write(stdout);
	    res.end();
  	});

  //res.json(result);
});

module.exports = router;