/*
Simulate server's REST API
everything goes in and out of it should be serialized in JSON format, so data could be transmitted across the wire
*/

import request from 'axios';
import fetch       from 'isomorphic-fetch';

const TIMEOUT = 100;	// simluate network delay

function writeObj(obj){ 
 var description = ""; 
 for(var i in obj){ 
  var property=obj[i]; 
  description+=i+" = "+property+"\n"; 
 } 
 console.log(description); 
} 

export default {

	getJobs: function( demurl ) {
	//return new Promise( ( resolve, reject ) => {
		var demurl = 'http://192.168.31.103:8080/api/v1/jobs/getall';
		 
			const init = {
				mode: 'no-cors',
				method: 'get',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				}
			};
			console.log('url='+demurl);
			
			 return request(demurl, init)
						.then(response => {
							console.log('statusxxxx:' + response.status);
							
							//console.log(response.data);
							JSON.stringify(response.data.jobs)
							console.log('fuck after pring respn.json');
							return JSON.stringify(response.data.jobs);
							
							//return Promise((resolve,reject) =>{
							//	resolve(JSON.stringify(response.data.jobs));
							//});
							
						});
	}
	
}

