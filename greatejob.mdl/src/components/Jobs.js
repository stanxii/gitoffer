import React, {Component, PropTypes} from 'react';
import Job from './Job';


export default class Jobs extends Component {

  static propTypes = {
    jobs: PropTypes.array
  }

  render() {
    const {jobs} = this.props;

    return (
      <div className="list-group">
      {

        jobs && jobs.length &&
         <ul>
           {
             jobs.map((job) => <Job job={job._source} />)
           }
         </ul>
      }
      </div>
    )
  }
}
