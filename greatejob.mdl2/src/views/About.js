import React, {Component} from 'react';
import DocumentMeta from 'react-document-meta';

export default class About extends Component {
  render() {
    const {showKitten} = this.state;
    const kitten = require('./kitten.jpg');
    return (
      <div >
        <div className="about mdl-grid">
            <div className="mdl-cell mdl-cell--2-col"></div>
            <div className="mdl-cell mdl-cell--10-col">
              <h1><span style={{color: '#ff4081'}}>Help people all over the world hire and get hired !</span></h1>
              <DocumentMeta title="GreateJob : About Us"/>

              <p>Founded in 2015, <a href="http://www.greatejob.com" target="_blank">GreateJob</a> was a  powerful job search engine tool with connecting social media  to help recruiters
                looking for referrals and sharing jobs. And  GreateJob helps global companies of  and all sizes hire the best talent and offers the best opportunity for global job seekers to get hired.
              </p>
				
			<div>
                <label> Alert jobs list to your email.</label> <br/>
                <input type="text" className="where"  placeholder="Your email" />
                <button className="findJobsBtn mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-color--accent mdl-color-text--accent-contrast" onClick={::this.handleSubmit}><i className="icon search"/>Find Jobs</button>
             </div>
			  
              <h3 style={{color: '#red'}}>We can Help you find a job and get hired. </h3>

              <p>GreatJob indexed over 1,000's of job boards websites. Employers also post jobs directly on Indeed.
                 No matter where a job is posted, it will be easy to find when you use GreatJob. GreatJob help you find jobs easily .</p>

              <p>
                We redesigned Ui Mobile friendly! Let you get job anywhere just on one url !
                support iphone iOS or Android.  <a href="http://www.greatejob.com" target="_blank">Find jobs in GreatJob Now!</a>
              </p>

              <img src='/images/devices.png'/>
              
            </div>
            <div className="mdl-cell mdl-cell--2-col"></div>
            <div className="mdl-cell mdl-cell--10-col">
              <h3 style={{color: '#feee'}}>We help Employers hire qualified candidates. </h3>

              <p>GreateJob connects millons job seekers all over the world each month. You can easily hired the qualified candidates. And GreatJob is Free all!</p>
              <a href="http://www.greatejob.com/postjob" target="_blank">Post jobs in GreatJob Now!</a>
		  
            </div>
        </div>
      </div>
    );
  }

  handleSubmit() {
	  
  }
  
  handleToggleKitten() {
    this.setState({showKitten: !this.state.showKitten});
  }

  state = {
    showKitten: false
  }
}
