import React from 'react';
import {Route} from 'react-router';
import App from 'views/App';
import Home from 'views/Home';
import Widgets from 'views/Widgets';
import About from 'views/About';
import Login from 'views/Login';
import RequireLogin from 'views/RequireLogin';
import LoginSuccess from 'views/LoginSuccess';
import Survey from 'views/Survey';
import FindJobs from 'views/FindJobs';
import Contact from 'views/Contact';
import Register from 'views/Register';
import Privacy  from 'views/Privacy';
import TermofUse   from 'views/TermofUse';
import HelpCenter from 'views/HelpCenter';
import NotFound from 'views/NotFound';

export default function(store) {
  return (
    <Route component={App}>
      <Route path="/" component={Home}/>
      <Route path="/widgets" component={Widgets}/>
      <Route path="/about" component={About}/>
      <Route path="/login" component={Login}/>
      <Route component={RequireLogin} onEnter={RequireLogin.onEnter(store)}>
        <Route path="/loginSuccess" component={LoginSuccess}/>
      </Route>
      <Route path="/survey" component={Survey}/>
      <Route path="/findjobs" component={FindJobs}/>
      <Route path="/contact" component={Contact}/>
	  <Route path="/register" component={Register}/>
	  <Route path="/privacy" component={Privacy}/>
	  <Route path="/term" component={TermofUse}/>
	  <Route path="/helpcenter" component={HelpCenter}/>
      <Route path="*" component={NotFound}/>
    </Route>
  );
}
