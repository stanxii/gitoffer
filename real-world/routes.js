import React from 'react'
import { IndexRoute, Route } from 'react-router'
import App from './containers/App'
import UserPage from './containers/UserPage'
import RepoPage from './containers/RepoPage'
import Home from './containers/Home'
import SearchHome from './containers/SearchHome'
import NotFount from './containers/NotFount'
import SearchBone from './containers/SearchBone'

export default (
  <Route path="/" component={App}>
	  {/* Home (main) route */}
    <IndexRoute component={SearchHome}/>
	
	{/* Routes */}	   
	<Route path="/search/:queryString/:ifrom/:isize" component={SearchBone} />
	
	{/* Routes requing login requireLogin */}
    <Route path="/github/:login/:name"
           component={RepoPage} />
    <Route path="/github/:login"
           component={UserPage} />
		   
	{ /* Catch all route not found */}
	<Route path="*" component={NotFount} status={404} />
  </Route>
)
