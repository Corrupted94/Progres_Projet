const axios = require ('axios');
const clientId = "e15b3ff01925793"; 



module.exports = 
{
	getImage : function (callback, imageKey)	
	{
		var link = "https://api.imgur.com/3/gallery/search/?q=";
		
		if (imageKey != "")	
		 	
		link = link + imageKey; 

			axios.get(link, { 

				headers : {

					Authorization : "Client-ID e15b3ff01925793"
				}	

			}).then (function (rep){ 
					
					callback (rep.data.data[0].link); 
			}).catch (console.error);
		

	}
	

}








