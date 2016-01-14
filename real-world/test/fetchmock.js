import 'isomorphic-fetch'



const MY_API_ROOT = 'http://192.168.31.209/'

// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested it was.
export function mycallApi(endpoint ) {
  const fullUrl = (endpoint.indexOf(MY_API_ROOT) === -1) ? MY_API_ROOT + endpoint : endpoint

  return fetch(fullUrl)
    .then(response =>
      response.json().then(json => ({ json, response }))
    ).then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json)
      }

      console.log(json);
      return Object.assign({},
        json,
        { }
      )
    })
}

// We use this Normalizr schemas to transform API responses from a nested form
// to a flat form where repos and users are placed in `entities`, and nested
// JSON objects are replaced with their IDs. This is very convenient for
// consumption by reducers, because we can easily build a normalized tree
// and keep it updated as we fetch more data.

// Read more about Normalizr: https://github.com/gaearon/normalizr

//callApi('/jobs/onepage/1/20');
