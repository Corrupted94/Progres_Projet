module.exports = 
{
	getHelp : function (callback, helpArg) 
	
	{
		var arg = helpArg.split (' ')[0];
		if (arg == "blague") 
		{
			callback ("Cette commande permet de raconter une blague aléatoire");
		}
		
		else if (arg == "meteo") 
		{
			callback ("Cette commande d'afficher les prévisions météo (par défaut pour aujourd'hui et le lendemain) pour une ville donnée. !meteo <nom_ville> ou !meteo zip <zipcode> <country>. L'option  : -d <jour> pour spécifier le jour");
		}

		else if (arg == "iss") 
		{
			callback ("Cette commande permet d'afficher une carte avec la position du satellite ISS");
		}
		else if (arg == "image") 
		{
			callback ("Cette commande permet d'afficher une image selon l'argument passé en paramètre. !image <searchKey>.");
		}
		else callback ("Liste de commandes disponibles : !blague, !meteo, !iss, !image. Pour plus d'informations sur une commande : !help <commande_sans_le_!>");
		
	},


	getHelpNoArg : function (callback)
	{
		
		callback ("Liste de commandes disponibles : !blague, !meteo, !iss, !image. Pour plus d'informations sur une commande : !help <commande_sans_le_!>");
			
	}
};
