import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SearchBox from '../components/SearchBox.jsx';
import SearchList from '../components/SearchList.jsx';
import * as JobActions from '../actions/JobActions';
import { fetchNeeds } from '../utils/fetchComponentData';

class JobsContainer extends Component {

	static needs = [
		JobActions.readAll
	];
	
	constructor(props, context) {
		super(props, context);
		this.actions = bindActionCreators(JobActions, props.dispatch);
	}

	componentDidMount() {
		fetchNeeds( JobsContainer.needs, this.props )
	}
	
	render() {

	  //let jobs = this.props.jobs;

	  // if( !jobs ) debugger;
	  
	  const { jobs } = this.props;

	  return (
		<div >
			<SearchBox  doSearch={this.actions.readAll} />
			<SearchList data={jobs.jobsById}/>
		</div>
	  );
	}

};

JobsContainer.propTypes = {
//  jobs: PropTypes.array.isRequired,
  //total: PropTypes.number.isRequired,
  //filter: PropTypes.string.isRequired,
  //ifrom: PropTypes.string.isRequired,
  //isize: PropTypes.string.isRequired,
  //loadJobs: PropTypes.func.isRequired
};

var mapStateToProps = (state, ownProps) => {
	return {
	    jobs: state.jobs,
	    //total: state.total,
	    //filter: ""
	};	
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(JobsActions, dispatch)
}

// 使用 connet auto dispath action creator
export default connect( mapStateToProps)(JobsContainer);
