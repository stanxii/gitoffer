import React, {Component} from 'react';
import DocumentMeta from 'react-document-meta';

export default class Register extends Component {
  render() {

    return (
      <div >
        <div className="register mdl-grid">
            <div className="mdl-cell mdl-cell--2-col"></div>
            <div className="mdl-cell mdl-cell--5-col">
              <h1><span style={{color: '#ff4081'}}>Be great at what you do</span></h1>
              <DocumentMeta title="GreateJob : contact Us"/>
			  <br/>
              <p>Get started - it's free.</p>

              <form action="#">
			    <div className="contact-txtfield mdl-textfield mdl-js-textfield">
                  <input className="mdl-textfield__input" type="text" id="Firstname" />
                  <label className="mdl-textfield__label" for="Firstname">First name</label>
                </div>
                <br/>
				<div className="contact-txtfield mdl-textfield mdl-js-textfield">
                  <input className="mdl-textfield__input" type="text" id="Lastname" />
                  <label className="mdl-textfield__label" for="Lastname">Last name</label>
                </div>
                <br/>
                <div className="contact-txtfield mdl-textfield mdl-js-textfield">
                  <input className="mdl-textfield__input" type="email" id="Email" />
                  <label className="mdl-textfield__label" for="Email">Your Email</label>
                </div>
                <br/>
				<div className="contact-txtfield mdl-textfield mdl-js-textfield">
                  <input className="mdl-textfield__input" type="password" id="MPassword" />
                  <label className="mdl-textfield__label" for="MPassword">Password (6 or more characters)</label>
                </div>
                <br/>
				<label> By clicking Join now, you agree to LinkedIn's User Agreement, Privacy Policy, and Cookie Policy</label>
				<br/>
                <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                  Join Now!
                </button>
              </form>
            </div>     
			<div className="mdl-cell mdl-cell--3-col">
			    <div className="demo-card-wide mdl-card mdl-shadow--2dp">
				  <div className="mdl-card__title">
					<h2 className="mdl-card__title-text">Social Media</h2>
				  </div>
				  <div className="mdl-card__supporting-text">
					Stay Connected GreateJob, you can use social media connect us with twitter, facebook, google plus, linkedin...
				  </div>
				  <div className="mdl-card__actions mdl-card--border">
					
					<div className="scorialmedia" >					
						<a className="scorial-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--twitter" target="_blank" title="Share on Twitter" href="http://twitter.com/home?status="><i className="fa fa-twitter fa-fw"></i> Twitter</a>
						<a className="scorial-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--facebook" target="_blank" title="Share on Facebook" href="https://www.facebook.com/sharer/sharer.php?u="><i className="fa fa-facebook fa-fw"></i> Facebook</a>
						<a className="scorial-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--googleplus" target="_blank" title="Share on Google+" href="https://plus.google.com/share?url="><i className="fa fa-google-plus fa-fw"></i> Google+</a>					
						<a className="scorial-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--linkedin" target="_blank" title="Share on LinkedIn" href="http://www.linkedin.com/shareArticle?mini=true&amp;url=&amp;title=&amp;summary="><i className="fa fa-linkedin fa-fw"></i> LinkedIn</a>						  
					</div>
				  </div>
				  
				  <div className="mdl-card__menu">					
				  </div>
				</div>
            </div>
			<div className="mdl-cell mdl-cell--2-col">
            </div>
        </div>
      </div>
    );
  }

}
