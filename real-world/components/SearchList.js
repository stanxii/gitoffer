import React, {Component, PropTypes} from 'react';
import SearchItem from './SearchItem';


export default class SearchList extends Component {
  render() {
	const {data} = this.props;  
    return (
      <ul>
        {data.map((job, index) =>
          <SearchItem job = {job}
                key={index} />               
        )}
      </ul>
    )
  }
  
  /*
  
  //onClick={() => this.props.onJobClick(index)} />
  
  renderResults() {
        if (jobs && jobs.length) {
		  //making the rows to display	
		  var rows=[];
		  { this.props.data.map((job, index) => {
	        rows.push(<SearchItem job = {job} />)
	        //rows.push(<tr><td>{person.name}</td></tr>)
	      });
          //returning the table		  
          return (
			  {rows}
          )
        }
  }
  
  render() {
    const {data} = this.props;
	
	return(
		<ul>
		  { this.renderResults() }
		</ul>	
	)
  }
  */
}

SearchList.propTypes = {
  data: PropTypes.array.isRequired,
  //onTodoClick: PropTypes.func.isRequired,
  /*
  data: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired
  */
}	