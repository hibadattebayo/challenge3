var api = "https://api.openweathermap.org/data/2.5/weather?";
var apiKey = "&appid=2939639d9c93ab8b8bcd5625ce131e8d"
var query = "q=Amsterdam";

function getWEATHERdata() {
var url = api + query + apiKey;
	fetch(url)
		.then(function(response) {
			return response.json();
		})
		
		// render weather per day
		.then(function(response) {
		console.log(response)
		var celsius = response.main.temp - 273.15;;
		var temp = celsius.toFixed(0);
		
		var icon = response.weather[0].icon;
		var iconurl = "http://openweathermap.org/img/w/" + icon + ".png";
		
		document.getElementById("weather").innerHTML +=  '<h2 class="weathertitle">' + temp + ' ' + '&#176;C'+ '<br>' + '</h2>' 
		+'<img class="weathericon" src=" ' + iconurl + '">' ;
		});
}

getWEATHERdata();