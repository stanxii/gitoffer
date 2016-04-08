import React, { Component, PropTypes } from 'react'

import { List, ListItem, ListItemContent, ListItemAction, Icon } from 'react-mdl';
import Button  from 'react-mdl/lib/Button';

////////////////////
export default class SearchBox extends Component {
  constructor(props) {
	super(props)
	this.handleKeyUp = this.handleKeyUp.bind(this)
	this.handleGoClick = this.handleGoClick.bind(this)
  }

  getInputValue() {
	return this.refs.queryString.value
  }

  setInputValue(queryString) {
	this.refs.queryString.value = queryString;
  }
  
  handleKeyUp(e) {
    if (e.keyCode === 13) {
      this.handleGoClick()
    }
  }

  handleGoClick() {
    this.props.doSearch(this.getInputValue())
  }

  render() {
    return (
      <div>
        <p>Type a jobtitle compony or skill and hit 'Go':</p>
        <input size="45"
               ref="queryString"
               defaultValue=''
               onKeyUp={this.handleKeyUp} />
		
			
			
		<Button className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect' onClick={this.handleGoClick} >
		    Search Jobs
		</Button>
			
        
      </div>
    )
  }
}

SearchBox.propTypes = {
  doSearch: PropTypes.func.isRequired
}
