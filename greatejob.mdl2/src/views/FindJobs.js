import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as jobsActions from '../ducks/jobs';
import {isLoaded, search as loadJobs} from '../ducks/jobs';

var ReactPaginate = require('react-paginate');

import SearchBar from '../components/SearchBar';
import Jobs from '../components/Jobs';


@connect(
  state => ({
    jobs: state.jobs.jobs,
    pageNum: state.jobs.pageNum,
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

  constructor(props) {
    super(props);
    this.state = {
            jobs: [],
            pageNum: 0,
            offset: 0
        };
  }
  // static defaultProps = {
  //   jobs: [
  //  ]
  // }

  static propTypes = {
    pageNum: PropTypes.number,
    jobs: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool,
    search: PropTypes.func.isRequired
  }

  render() {
    const { pageNum, jobs, error, loading, search} = this.props;
    const styles = require('./FindJobs.scss');

    //console.log('FindJobs.js ====searchbox jobs='+JSON.stringify(jobs));

    return (
      <div >
        <SearchBar  change={::this.handleChange} search={::this.handleSearch}/>
        <div className={ " mdl-grid"}>
          <div className="mdl-cell mdl-cell--3-col"></div>
          <div className="mdl-cell mdl-cell--6-col">
            <Jobs jobs = {jobs} />
            <div id="react-paginate">
            <ReactPaginate previousLabel={"previous"}
                           nextLabel={"next"}
                           breakLabel={<li className="break"><a href="">...</a></li>}
                           pageNum={this.state.pageNum /10 }
                           marginPagesDisplayed={2}
                           pageRangeDisplayed={5}
                           clickCallback={this.handlePageClick}
                           containerClassName={"pagination"}
                           subContainerClassName={"pages pagination"}
                           activeClassName={"active"} />
            </div>
          </div>
          <div className="mdl-cell mdl-cell--3-col"></div>
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

  handlePageClick(data) {
    var selected = data.selected;
    var offset = Math.ceil(selected * this.props.perPage);

    // this.setState({offset: offset}, function() {
    //   this.loadCommentsFromServer();
    // }.bind(this));
    //
    // this.loadCommentsFromServer();
  }


  // static fetchData(store) {
  //   if (!isLoaded(store.getState())) {
  //     return store.dispatch(loadJobs());
  //   }
  // }
}
