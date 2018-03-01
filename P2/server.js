var express = require('express');
var app = express();

var server = require('http').Server(app);
var io = require('socket.io')(server);

var nextID = 0;

var game = require ('./game.js');


app.use(express.static('public'));



game.gameINIT();

//Si un client se connecte
io.on('connection', function(socket){
	var clientID = nextID ++;
	socket.emit('sendID', {cID: clientID});

	socket.on ('input', function (data) {
		game.processInput(data);

		
	});
});




server.listen(3000, function(){
	console.log('Hello!! My name is server! I am listening on prot 3000');
});

