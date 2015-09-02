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
      <div >
        <SearchBar  change={::this.handleChange} search={::this.handleSearch}/>
        <Jobs jobs = {jobs} />

        <div className="greatejob-font greatejob-slogan">
          dd
        </div>
        <div className="greatejob-font greatejob-sub-slogan">
         dd
        </div>

        <div className="greatejob-font greatejob-create-character">
          <a href=""><img src="images/andy.png" /> create your greatejob character</a>
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
