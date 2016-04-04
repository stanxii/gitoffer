require('es6-promise').polyfill();
require('isomorphic-fetch')

//const MY_API_ROOT = 'http://192.168.31.209/'
const MY_API_ROOT = 'http://192.168.1.209/'

// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how 
  //const fullUrl = (endpoint.indexOf(MY_API_ROOT) === -1) ? MY_API_ROOT + endpoint : endpoint

  //fullUrl = 'http://69.30.229.10:9292/bestjobs_index/bestjobs_type/_search';
  
  fullUrl = 'http://192.168.31.103:8080/api/v1/jobs/getall';
  const init = {
				mode: 'no-cors',
				method: 'get',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				}
			};
  return fetch(fullUrl, init)
    .then(response => {
      console.log('statuslllllll:' + response.status);
      console.log('json===:' + response.json());
      return response.json();
    }).then((json ) => {
	
	  console.log('fuckkkxxxxx');
	  //console.log(json.json);
 
	  json.json.jobs.map( (item) => {	  
		console.log('XXXXXOOOOOOOOOOOOOOOOOOOOOO:' + JSON.stringify(item)); 
		return item;
				});
			
			
	  
	    console.log('fuckkkooooxxxxxxxx');
      //return Object.assign({},
      //  json,
        //{ }
     // )
    });


// We use this Normalizr schemas to transform API responses from a nested form
// to a flat form where repos and users are placed in `entities`, and nested
// JSON objects are replaced with their IDs. This is very convenient for
// consumption by reducers, because we can easily build a normalized tree
// and keep it updated as we fetch more data.

// Read more about Normalizr: https://github.com/gaearon/normalizr

//callApi('/jobs/onepage/1/20');
