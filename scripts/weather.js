function getAPIdata() {

	// request API
	var request = 'https://api.openweathermap.org/data/2.5/weather?appid=b0c8dafa512a0134e90df6ece3c2b7a2&q=the%20Hague,nl';

	// get current weather
	fetch(request)	
	
	// parse response to JSON format
	.then(function(response) {
		return response.json();
	})
	
	.then(function(response) {
		
		//console.log(response);

		document.getElementById('weather').innerHTML = 'Right now the sky is ' +response.weather[0].main +' in The Hague.';

	});
}

// init data stream
getAPIdata();
