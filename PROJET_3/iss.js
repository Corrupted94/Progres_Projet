
var sharp = require ('sharp');
var axios = require ('axios');


module.exports= 
{
	getIss: function (callback) 
	{

		axios.get("http://api.wheretheiss.at/v1/satellites/25544").then(function(rep1){
			var long = rep1.data.longitude;
			var lat = rep1.data.latitude;
			var url_image = "http://staticmap.openstreetmap.de/staticmap.php?center="+lat+","+long+"&zoom=5&size=400x300&maptype=mapnik&markers="+lat+","+long+",ltblu-pushpin";
		
			axios.get(url_image, {responseType: 'arraybuffer'}).then(function (rep2) {

		sharp(rep2.data).overlayWith('./iss.png').png().toBuffer ().then (function (data) { callback(data);}).catch(console.error);
			



			}).catch (console.error);

		}).catch(console.error);
	}	


		
}
