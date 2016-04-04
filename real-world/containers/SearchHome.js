/*  What I've changed from your code is I changed this.state.filteredData to be undefined (in fact you could just remove it entirely, but I thought this was clearer for you right now) in your initial state. This way when you first render the box, there's no filteredData and your <DisplayTable /> doesn't render. As soon as you run your doSearch callback from <SearchBox /> it will populate filteredData and display it.

To extend this you could also check when this.state.query is undefined again or blank (eg with : this.state.query.length) to remove <DisplayTable /> from the dom again if there is no query / no results.

Remember render functions are still just javascript. Anything you wrap in {} inside JSX will be evaluated. We could have just had this logic inside the render function and be doing something like var displayTable = <DisplayTable />; and then including {displayTable} in the returned JSX and it would have been the same. I personally just prefer splitting render logic up among different functions :)
*/
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { pushState } from 'redux-router'
import SearchBox from '../components/SearchBox'
import { resetErrorMessage } from '../actions'

class SearchHome extends Component {
  constructor(props) {
    super(props)
	this.handleKeyUp = this.handleKeyUp.bind(this)
    this.handleGoClick = this.handleGoClick.bind(this)
  }
  
  getInputValue() {
    return this.refs.input.value
  }

  setInputValue(val) {
    // Generally mutating DOM is a bad idea in React components,
    // but doing this for a single uncontrolled field is less fuss
    // than making it controlled and maintaining a state for it.
    this.refs.input.value = val
  }

  handleKeyUp(e) {
    if (e.keyCode === 13) {
      this.handleGoClick()
    }
  }

  handleGoClick() {
	var nextvalue = this.getInputValue();  
	this.props.pushState(null, `/search/${nextvalue}/1/20`)  
    //this.props.goSearch(this.getInputValue())
  }
	
  render(){
        return (
            <div>
			    <ul>
				  <li><a href="/">Find Jobs</a></li>
				  <li><a href="/search/xxx/1/2">Search Page</a></li>
				</ul>
				<p>Type a username or repo full name and hit 'Go':</p>
				<input size="45"
					   ref="input"
					   defaultValue={this.props.value}
					   onKeyUp={this.handleKeyUp} />
				<button onClick={this.handleGoClick}>
				  Go!
				</button>
				<p>
				  This is the home page.
					<button className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
					  <i className="material-icons">add</i>
					</button>
				</p>
				<p>
				  Will nagivate to search page.
				</p>
			  </div>
        )
  }

}  

SearchHome.propTypes = {
  pushState: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps, {
  pushState	
})(SearchHome)



