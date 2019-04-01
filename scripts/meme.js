//window onload
window.onload = function() {
	//make variable with the link to the api
	var api = "https://api.giphy.com/v1/gifs/trending?";
	//make variable with the api key
	var apiKey = "&api_key=Wcg2bvD303bHYF95u2LhwgTRbHr0i5K2";
	//make variable with the query -> limit is 3 gifs
	var query = "&limit=3&rating=G";

	//function to get the API data
	function getAPIdata() {
	//create url with the variables made
	var url = api + apiKey + query;
	//fetch
	fetch(url)
	// parse to JSON format
	.then(function(response) {
		return response.json();
	})

		.then(function(response) {
			//for loopie
			for (var i = 0; i < response.data.length; i++){
				//console.log(response.data[i].images);
			//Put an image tag in the div with id "gifbox" and show the response in it (aka the gif)
				document.getElementById("gifbox").innerHTML += '<img class="gifs" src=" ' + response.data[i].images.fixed_width.url + '">' + '<br>';
			}
		});
	}

	getAPIdata();
}