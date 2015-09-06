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
    const styles = require('./SearchBar.scss');

    return (
        <div >
          <div className={styles.searchBar + " mdl-grid"}>
            <div className="mdl-cell mdl-cell--4-col"></div>
            <div className="mdl-cell mdl-cell--4-col">
              <img src="/images/greatejob-logo.jpg"  />
            </div>
            <div className="mdl-cell mdl-cell--4-col"></div>
          </div>

          <div className={styles.searchBar + " mdl-grid"}>
              <div className="mdl-cell mdl-cell--3-col"></div>
              <div className="mdl-cell mdl-cell--3-col">
                <div>
                  <label className={styles.whatFont}>What</label>
                </div>
                <div >
                  <input type="text" ref="queryString" className={styles.what} placeholder="job titles/skills/company" onChange={::this.handleChange} />
                </div>
              </div>
              <div className="mdl-cell mdl-cell--3-col">
                <div>
                  <label className={styles.whatFont}>Where</label>
                </div>
                <div >
                  <input type="text" className={styles.where}  placeholder="city, state or zip code" />
                  <button className="findJobsBtn mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-color--accent mdl-color-text--accent-contrast" onClick={::this.handleSubmit}><i className="icon search"/>Find Jobs</button>
                </div>
              </div>
              <div className="mdl-cell mdl-cell--3-col">
              </div>
          </div>
        </div>
    );
  }
}
