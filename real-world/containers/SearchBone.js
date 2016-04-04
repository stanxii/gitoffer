/*  What I've changed from your code is I changed this.state.filteredData to be undefined (in fact you could just remove it entirely, but I thought this was clearer for you right now) in your initial state. This way when you first render the box, there's no filteredData and your <DisplayTable /> doesn't render. As soon as you run your doSearch callback from <SearchBox /> it will populate filteredData and display it.

To extend this you could also check when this.state.query is undefined again or blank (eg with : this.state.query.length) to remove <DisplayTable /> from the dom again if there is no query / no results.

Remember render functions are still just javascript. Anything you wrap in {} inside JSX will be evaluated. We could have just had this logic inside the render function and be doing something like var displayTable = <DisplayTable />; and then including {displayTable} in the returned JSX and it would have been the same. I personally just prefer splitting render logic up among different functions :)
*/
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { pushState } from 'redux-router'
import { loadJobs } from '../actions'
import SearchBox from '../components/SearchBox'
import SearchList from '../components/SearchList'
import { resetErrorMessage } from '../actions'

//import {componentHandler} from 'material-design-lite';


class SearchBone extends Component {
  constructor(props) {
    super(props)
	//this.renderResults = this.renderResults.bind(this)
  }
  
  componentWillMount() {
    //loadData(this.props)
  }
  
  componentDidMount() {
	//componentHandler.upgradeDom();  
  }
   componentDidUpdate() {
    //componentHandler.upgradeDom();
  }
	
  componentWillReceiveProps(nextProps) {
   // if (nextProps.login !== this.props.login) {
   //   loadData(nextProps)
   // }
  }

/*	
  doSearch(queryString){
        console.log(queryString)
        var queryResults=[];
        this.props.jobs.forEach(function(job){
            if(job.title.toLowerCase().indexOf(queryString)!=-1)
            queryResults.push(job);
        });

        this.setState({
            query: queryString,
			results: queryResults
        })
    }
*/

/*	
  renderResults() {
        if (this.props.jobs) {
            return (
			    <div>
				  <h2> Hello results </h2>
                <SearchList data={this.props.jobs}/>
				</div>
            )
        }
  }
*/
	
  render(){
	
        return (
            <div>
			    <ul >
				  <li><a href="/">Find Jobs</a></li>
				  <li><a href="/search/xxx/1/2">Search Page</a></li>
				</ul>
                <h2>Search list page is Summer?</h2>
                <SearchBox  doSearch={this.props.loadJobs}/>
				<div>
				  <h2> Hello results </h2>
                <SearchList data={this.props.jobs}/>
				</div>
                //{this.renderResults}
            </div>
        )
  }

}  

SearchBone.propTypes = {
  jobs: PropTypes.array.isRequired,
  //ifrom: PropTypes.string.isRequired,
  //isize: PropTypes.string.isRequired,
  loadJobs: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const {
    entities: { users, repos, jobs }
  } = state
  
  return {
    jobs: state.jobs.jobs
  }
}

export default connect(mapStateToProps, {
  loadJobs,
  pushState
})(SearchBone)

	
/*
var dataSource=[
{
    name:'Paul mak',
    image: <img width="50" src="./images/profile_img.png"/>,
},
{
    name:'John Doe',
    image : '002'
},
{
    name:'Sachin Tendulkar',
    image : '003'
}];
*/

var  initJobs = [
  {id: 1, category: 'it', title: ' fuck ios developer', company: 'apple', description:'descr', detail_link:'xxx', city:'xx', last_update:'laster up', job_type: 'full'},
  {id: 2, category: 'java', title: 'android', company: 'google', description:'descr', detail_link:'xxx', city:'xx', last_update:'laster up', job_type: 'full'},
  {id: 3, category: 'it', title: 'ios developer', company: 'apple', description:'descr', detail_link:'xxx', city:'xx', last_update:'laster up', job_type: 'full'}
];



/*
React.render(
  <SearchBone data={dataSource}/>,
  document.getElementById('content1')
);
*/
