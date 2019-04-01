function getAPIdata() {

	// request API
	var request = 'http://api.open-notify.org/astros.json';

	// get current weather
	fetch(request)	
	
	// parse response to JSON format
	.then(function(response) {
		return response.json();
	})
	
	.then(function(response) {
		
		//console.log(response);

		for(var i = 0; i < response.people.length; i++)
		{
		document.getElementById('name').innerHTML += response.people[i].name;
		if(i != response.people.length-1) document.getElementById('name').innerHTML += ", ";
		}	

	});
}

// init data stream
getAPIdata();
