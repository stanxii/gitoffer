import React, {Component, PropTypes} from 'react';

export default class Job extends Component {

  static propTypes = {
    job: PropTypes.object.isRequired
  }

  render() {
    const {job} = this.props;
    const styles = require('./Job.scss');



    return (
      <div>
		<div className={styles.jobDetail}>
          <h3 className={styles.jobtitle_h2}>
              <a href={job.detail_link} ><b>{job.title}</b></a>
          </h3>
          <div >
				<i className="starcolor material-icons">star</i>
				<i className="starcolor material-icons">star</i>
				<i className="starcolor material-icons">star</i>
				<i className="starcolor material-icons">star_half</i>	
				- 
				<h4 className={styles.company}>{job.company}</h4>
				-
				<h4 className={styles.location}> {job.city} </h4>
		  </div>
          
          <div className={styles.jobDetail_description}>{job.description}</div>
		  
          <div>
			<span className="date_color">{job.last_update}</span> - 
			<span className="snippet">
				<a className="mdl-button mdl-js-button mdl-button--raised" href={job.detail_link} ><b>Save</b></a> 
				<a className="mdl-button mdl-js-button mdl-button--raised" href={job.detail_link} ><b>Mail</b></a> 
				<a className="mdl-button mdl-js-button mdl-button--raised" href={job.detail_link} ><b>Share</b></a> 
				<a className="mdl-button mdl-js-button mdl-button--raised" href={job.detail_link} ><b>More...</b></a> 
			</span>
		  </div>
          
		</div>  
      </div>
    )
  }
}
