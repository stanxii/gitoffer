import React, { Component, PropTypes } from 'react'


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
        <button onClick={this.handleGoClick}>
          Go!
        </button>
        
      </div>
    )
  }
}

SearchBox.propTypes = {
  doSearch: PropTypes.func.isRequired
}
