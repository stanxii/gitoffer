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

          <h2 className="listing-company">
              <a href={job.detail_link} className="listing-location"><b>{job.title}</b></a>
          </h2>
          <div className="company">{job.company}</div>
          <span className ratings="ratings">
            <span  className ratings="rating">
            </span>
          </span>

          <div className={styles.effect02} contenteditable="true">前端开发whqet</div>
          <span className="shiny"><span className="inner-shiny">Shiny</span> </span>

          <div>{job.city}</div>
          <span className="listing-job-type">Looking for: {job.title }</span>
          <div>{job.description}</div>
          <div>{job.last_update}</div>
          <div>{job.job_type}</div>
      </div>
    )
  }
}
