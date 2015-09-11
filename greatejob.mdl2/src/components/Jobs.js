import React, {Component, PropTypes} from 'react';
import Job from './Job';


export default class Jobs extends Component {

  static propTypes = {
    jobs: PropTypes.array
  }

  render() {
    const {jobs} = this.props;

    return (
      <div>
        <div className={ " mdl-grid"}>
            <div className="mdl-cell mdl-cell--3-col"></div>
            <div className="mdl-cell mdl-cell--6-col">
              {

                jobs && jobs.length &&
                 <ul className="jobslistUL">
                   {
                     jobs.map((job) => <Job job={job._source} />)
                   }
                 </ul>
              }
            </div>
            <div className="mdl-cell mdl-cell--3-col"></div>
        </div>
      </div>
    )
  }
}
