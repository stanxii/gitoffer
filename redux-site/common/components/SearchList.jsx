import React, {Component, PropTypes} from 'react';
import SearchItem from './SearchItem';

import { List, ListItem, ListItemContent, ListItemAction, Icon } from 'react-mdl';


if (process.env.BROWSER) {
    require('./SearchList.less');
}

export default class SearchList extends Component {
  render() {
	const {data} = this.props;  
    return (
	<div>
		<List style={{width: '650px'}}>
			  <ListItem  className='SearchList__content' threeLine>
				<ListItemContent avatar="person" subtitle="Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing Hal in Malcom in the Middle.">Bryan Cranston</ListItemContent>
				<ListItemAction>
				  <a href="#"><Icon name="star" /></a>
				</ListItemAction>
			  </ListItem>
			  <ListItem threeLine>
				<ListItemContent avatar="person" subtitle="Aaron Paul played the role of Jesse in Breaking Bad. He also featured in the Need For Speed Movie.">Aaron Paul</ListItemContent>
				<ListItemAction>
				  <a href="#"><Icon name="star" /></a>
				</ListItemAction>
			  </ListItem>
			  <ListItem threeLine>
				<ListItemContent avatar="person" subtitle="Bob Odinkrik played the role of Saul in Breaking Bad. Due to public fondness for the character, Bob stars in his own show now, called Better Call Saul.">Bob Odenkirk</ListItemContent>
				<ListItemAction>
				  <a href="#"><Icon name="star" /></a>
				</ListItemAction>
			  </ListItem>
			</List>
			
	  <ul>
        {data.map((job, index) =>
          <SearchItem job = {job}
                key={index} />               
        )}
      </ul>
	 </div>
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
	    <div>
		 
			
			

		  <ul>
		    { this.renderResults() }
		  </ul>
        </div>		
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