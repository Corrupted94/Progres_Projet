

const Discord = require ('discord.js'); 
const client = new Discord.Client();



/***************Server *********/
var express = require ('express'); 
var app = express ();

app.get ('/', function (req, res) { 
	res.send ('hello world '); 
});

/* ************************** */

var Blague = require ('./blague.js');
var Meteo = require ('./meteo.js');
var Image = require ('./image.js');
var ISS = require ('./iss.js');
var Help = require ('./help.js');



client.on ('ready', () => {
	console.log('Ready');
});

client.on ('message', message => {
	if (message.author.bot) return;	
	var isDM = false;

	var messageContent = "";
	if (message.mentions.users.get(client.user.id))
	{
		messageContent = message.content.replace('<@'+client.user.id+'>', '');
		if (messageContent [0] == ' ') messageContent = messageContent.substring (1);
		isDM = false; 
		
	}	
	else if (message.channel.type == 'dm')
	{
		messageContent = message.content;
		isDM = true;
		
	}
	else return;

	if (messageContent != "")
	{
		var contentArray = messageContent.split(' ');
		if (contentArray.length > 0) //array not empty
		{
			if (contentArray[0] == "!ping") 
			{
				message.reply("pong");
			}	

			else if (contentArray [0] == "!blague") 
			{
				Blague.getBlague (function (data) 
				{
					message.reply(data);
				});
			}
			else if (contentArray [0] == '!meteo')
			{
				contentArray.shift();
				var city = contentArray.join(' ');
				
				if (city != "")
				{
					Meteo.getWeather (function (data)
					{
						message.reply(data);
					}, city);
				}
				

			}	
			else if  (contentArray [0] == '!image')	
			{
				contentArray.shift();
				var imageKey = contentArray.join(' ');
				
				if (imageKey != "")
				{
					Image.getImage (function (data)
					{
						message.reply(data);
					}, imageKey);
				}
			}	
			else if  (contentArray [0] == '!iss')	
			{
				
				ISS.getIss (function (data)
				{
					if (isDM == true)
						message.author.sendFile(data,"png");
					else message.channel.sendFile(data,"png");
				});
				
			}	
			else if (contentArray [0] == '!help')	
			{
				contentArray.shift();
				var helpArg = contentArray.join(' ');
				if (helpArg != "")
				{
					Help.getHelp (function (data)
					{
						message.reply(data);
					}, helpArg);

					
				}
				else 
				{
					Help.getHelpNoArg (function (data)
					{
						message.reply(data);
					});
				}
			}



			else message.reply ("Je n'ai pas compris votre demande. !help pour plus d'informations"); 
		}

		else 
		{
			console.log ("error");
			message.reply ("Pas de commande. !help pour plus d'informations"); 
		}
	}
	
});









/**********PRESENCE UPDATE *****************/
client.on ('presenceUpdate', function (oldMember, newMember) {
	console.log (oldMember.presence, '=>', newMember.presence);
	//console.log ("User : ",newMember.user.username; "Logged in/out");
	if (newMember.user.username ==  "bramas" && newMember.presence.status == "online") 
	{
		newMember.sendMessage ("Bonjour maitre, je suis le bot de SU Yiu Quan et de SEYDOU Mamouina, que puis-je faire pour vous ?");
	}
});


client.login(process.env.DISCORD_TOKEN); 

app.listen(process.env.PORT || 5000);

