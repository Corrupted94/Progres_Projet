var environment = {
	players = {},
	map = new Array (),
	bullets  {};
};



function updatePlayer (player)
{
	player.x += player.direction.x * player.speed;
	player.y += player.direction.y * player.speed;
}

function updateEnvironment ()
{
	environment.players.forEach(updatePlayer);
}

function processInput (input)
{
	var player = environment.players[input.clientID];
	switch (input.key){
	case 'UP_PRESSED':
		player.direction.y -= 1;
		break;


	
	
}

function gameINIT ()
{
	for (var i=0; i <9; i++)
	{
		environment.map[i] = new Array ();
	}


	for (var i=0; i <9; i++)
	{
		for (var j=0; j <9; j++)
		{
			//dessine le cadre
			if (i==0 || j==0 || i==9 || j == 9)
				environment.map [i][j] = 'W';

			else environment.map [i][j] = 'E';
		}
	}

}

function collide (obj1, obj2)
{

	return  obj1.x + obj1.width > obj2.x &&
		obj2.x + obj2.width > obj1.x &&
		obj1.y + obj1.height > obj2.y &&
		obj2.y + obj2.height > obj1.y;
}

}

