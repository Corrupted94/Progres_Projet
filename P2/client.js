var $ = require ('jquery');
var socket = require ('socket.io-client')();
var environment = {
	players: {},
	objects: []
};
var ID = -1;

socket.on('sendID', function (data){
	console.log ("Client ID = "+data.cID);
	ID = data.cID;
});



function renderLoop ()
{
	Object.keys(environment.players).forEach(drawPlayer);
	environment.objects.forEach(drawObject);
	window.requestAnimationFrame (renderLoop);
}


socket.on ('updateEnvironment', function (newEnvironment){
	environment = newEnvironment);
	
});

/********On key press*********/

$(document).on('keydown', function (event){
	if (event.keyCode == 37)
		socket.emit('input', key:{'LEFT_PRESSED'});

	if (event.keyCode == 38)
		socket.emit('input', key:{'UP_PRESSED'});

	
	if (event.keyCode == 39)
		socket.emit('input', key:{'RIGHT_PRESSED'});

	if (event.keyCode == 40)
		socket.emit('input', key:{'DOWN_PRESSED'});
});

$(document).on('keyup', function (event){
	if (event.keyCode == 37)
		socket.emit('input', key:{'LEFT_RELEASED'});

	if (event.keyCode == 38)
		socket.emit('input', key:{'UP_RELEASED'});

	
	if (event.keyCode == 39)
		socket.emit('input', key:{'RIGHT_RELEASED'});

	if (event.keyCode == 40)
		socket.emit('input', key:{'DOWN_RELEASED'});
});



/*
function drawPlayers (playerID)	
{
	var player = environment.players[playerID];

	
}

function drawObjects (object)	
{
	var object = environment.objects[object];

	
}*/
