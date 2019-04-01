//make variable with the link to the api
var api = "https://api.openweathermap.org/data/2.5/weather?";
//make variable with the api key
var apiKey = "&appid=2939639d9c93ab8b8bcd5625ce131e8d";
//make variable with the query, show the weather in Amsterdam
var query = "q=Amsterdam";

//function to get the API data
function getWEATHERdata() {
//create url with the variables made
	var url = api + query + apiKey;
		fetch(url)
			.then(function(response) {
				return response.json();
			})
		
		// render weather per day
		.then(function(response) {
		//console.log(response)
			//Openweathermap.API shows the weather in kelvin. To make this celcius you have to subtract 273.15
			var celsius = response.main.temp - 273.15;;
			//I want 0 decimals
			var temp = celsius.toFixed(0);
			
			//Variable for icon
			var icon = response.weather[0].icon;
			//Variable with the url of the icons
			var iconurl = "http://openweathermap.org/img/w/" + icon + ".png";
			
			//Show the weather and the icon that belongs to the weather in the h2 and image tag
			document.getElementById("weather").innerHTML +=  '<h2 class="weathertitle">' + temp + ' ' + '&#176;C'+ '<br>' + '</h2>' 
			+'<img class="weathericon" src=" ' + iconurl + '">' ;
		});
}

getWEATHERdata();