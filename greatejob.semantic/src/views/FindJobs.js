import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as jobsActions from '../ducks/jobs';
import {isLoaded, search as loadJobs} from '../ducks/jobs';

import SearchBar from '../components/SearchBar';
import Jobs from '../components/Jobs';

@connect(
  state => ({
    jobs: state.jobs.data,
    error: state.jobs.error,
    loading: state.jobs.loading
  }),
  dispatch => ({
    ...bindActionCreators({
      ...jobsActions
    }, dispatch)
  })
)
export default
class FindJobs extends Component {

  // constructor(props) {
  //   super(props);
  //
  // }
  // static defaultProps = {
  //   jobs: [
  //  ]
  // }

  static propTypes = {
    jobs: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool,
    search: PropTypes.func.isRequired
  }

  render() {
    const {jobs, error, loading, search} = this.props;
    const styles = require('./FindJobs.scss');

    //console.log('FindJobs.js ====searchbox jobs='+JSON.stringify(jobs));

    return (
      <div ui grid>
        <div className="ui six column centered grid">
            <div className="six column centered row">
              <img className="ui centered image" src="/greatejoblogo.png" />
            </div>
            <div className="six column centered row">
              <SearchBar  change={::this.handleChange} search={::this.handleSearch}/>
            </div>
        </div>
        <div className="sixteen wide column">
          <Jobs jobs = {jobs} />
        </div>
      </div>
    )
  }

  handleChange(queryString) {
  	console.log('handleChange queryString='+ queryString);
  }

  handleSearch(queryString) {
    this.props.search(queryString);
  }

  // static fetchData(store) {
  //   if (!isLoaded(store.getState())) {
  //     return store.dispatch(loadJobs());
  //   }
  // }
}
