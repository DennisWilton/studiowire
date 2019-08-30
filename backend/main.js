const 	express 				= require('express'),
		app 					= express(),
		bodyParser				= require('body-parser'),
		{port, welcomeMessage}	= require('./config.js');


app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
		
let admin = require('./admin/admin');


app.use('/admin', admin);

app.get('/', (req, res) => {
	res.json({status: "OK"})
})

app.use('*', (req, res) => {
	res.redirect('/');
})

app.listen(port, console.log( welcomeMessage() ));