var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.set('views','views');
app.set('view engine','jade');

app.use(bodyParser());

app.get('/',function(req,res){
	res.render('index',{title: 'hello',message:'world'});
	console.log('posting....');
});

app.post('/posting',function(req,res){
	func(req.body.message,req.body.channel)
	res.render('index',{posted:true});
});

app.listen(3000);

var func = function(message,channel){
	var request = require('request');
var url = 'https://hooks.slack.com/services/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';
request({
	url: url,
	method: 'POST',
	json: {text: message,channel:channel},
	headers: {
		'content-type': 'application/json',
	}
}, function(error,response,body){
	if(!error && response.statusCode === 200){
		console.log(body);
	}else{
		console.log(body);
		console.log('error:' + error);
		console.log('status code:' + response.statusCode);
		console.log('status text:' + response.statusText);
	}
})
}