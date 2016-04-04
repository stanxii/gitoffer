require('es6-promise').polyfill();
require('isomorphic-fetch');

//var fullUrl ='192.168.31.209:9000/jobs/onepage/0/20';
var fullUrl ='192.168.1.209:9000/jobs/onepage/0/20';

fetch(fullUrl)
    .then(response =>
      response.json().then(json => (
           console.log(json) 
           return  { json, response }
         ))
    ).then(function(json, response ){
      if (!response.ok) {
        
        console.log('err' + json);
        return Promise.reject(json)
      }
      
      console.log( json);

    })
