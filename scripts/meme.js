window.onload = function() {

var api = "https://api.giphy.com/v1/gifs/trending?";
var apiKey = "&api_key=Wcg2bvD303bHYF95u2LhwgTRbHr0i5K2";
var query = "&limit=3&rating=G";

function getAPIdata() {
	var url = api + apiKey + query;
	// get current weather
	fetch(url)
	// parse to JSON format
	.then(function(response) {
		return response.json();
	})

	.then(function(response) {
		for (var i = 0; i < response.data.length; i++){
			//console.log(response.data[i].images);
			document.getElementById("memes").innerHTML += '<img class="gifs" src=" ' + response.data[i].images.fixed_width.url + '">' + '<br>';
		}
	});
}

// init data stream
getAPIdata();
}