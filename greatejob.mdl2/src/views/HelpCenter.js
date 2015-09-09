import React, {Component} from 'react';
import DocumentMeta from 'react-document-meta';

export default class HelpCenter extends Component {
  render() {

    return (
      <div >
        <div className="helpcenter mdl-grid">
            <div className="mdl-cell mdl-cell--2-col"></div>
            <div className="mdl-cell mdl-cell--5-col">
              <h1><span style={{color: '#feee'}}>GreateJob Privacy Policy.</span></h1>
              <DocumentMeta title="GreateJob : contact Us"/>
			  <br/>
					<div >
						<h1>GreateJob Online Terms of Use</h1>
						<p>THE TERMS AND CONDITIONS SET FORTH BELOW (THE "TERMS") GOVERN YOUR USE OF THIS SITE ON THE WORLD WIDE WEB (THE "SITE") OF GreateJob, INC. ("GreateJob") AND THE EMPLOYMENT SEARCH AND HIRING SERVICES AND THE GREATEJOBFORUMS ONLINE MESSAGE BOARD AVAILABLE ON THIS SITE (THE "SERVICES") AND, AND ARE LEGALLY BINDING ON YOU. IF YOU DO NOT AGREE WITH ANY OF THESE TERMS, DO NOT ACCESS OR OTHERWISE USE THIS SITE AND/OR THE SERVICES OR ANY INFORMATION CONTAINED ON THE SITE. YOUR USE OF THIS SITE AND/OR THE SERVICES ON THIS SITE SHALL BE DEEMED TO BE YOUR AGREEMENT TO ABIDE BY EACH OF THE TERMS SET FORTH BELOW. YOU AGREE THAT GreateJob MAY MAKE CHANGES TO THE SERVICES OFFERED ON THIS SITE, AT ANY TIME WITHOUT NOTICE, AND CAN REVISE THESE TERMS AT ANY TIME. WE WILL NOTIFY YOU OF SUCH REVISIONS BY POSTING AN UPDATED VERSION OF THESE TERMS ON THE SITE. YOU ARE RESPONSIBLE FOR REGULARLY REVIEWING THESE TERMS. YOUR CONTINUED USE OF THE SITE AND/OR THE SERVICES SHALL CONSTITUTE YOUR CONSENT TO SUCH CHANGES. This Site and the Services are intended for use by individuals looking for employment and for employers and recruiters seeking candidates for employment.</p>

						<h2>General Use Restrictions</h2>
						<p>All information, documents and Services provided on this Site, including trademarks, logos, graphics and images (the "Materials") are provided to you by GreateJob. Except as expressly stated herein, you acknowledge that you have no right, title or interest in or to the Materials on any legal basis.</p>

				  </div>	          
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
