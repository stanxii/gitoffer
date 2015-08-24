import React, {Component, PropTypes} from 'react';

export default
class SearchBar extends Component {
  static propTypes = {
    queryString: PropTypes.string,
    change: PropTypes.func,
    search: PropTypes.func
  }

  handleChange(event) {
    event.preventDefault();
  	this.props.change(
  		this.refs.queryString.getDOMNode().value
  	);
  }

  handleSubmit(event) {
    //call parentnode seachbox callback and up pass paramer
    event.preventDefault();
    const input = this.refs.queryString.getDOMNode();
    this.props.search(input.value);
    input.value='';
  }

  render() {
    const {queryString, change, search} = this.props;
    //const styles = require('./SearchBar.scss');

    return (
        <div >
          <form  onSubmit={::this.handleSubmit}>
            <div className="ui icon input">
              <input placeholder="job titles/skills/company" ref="queryString" onChange={::this.handleChange} />
            </div>
            <div className="ui icon input">
              <input placeholder="city, state or zip code" type="text" />
            </div>
            <button className="ui primary button" onClick={::this.handleSubmit}><i className="icon search"/>Search Jobs</button>
          </form>

        </div>
    );
  }
}
