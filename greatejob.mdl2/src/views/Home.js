import React, {Component} from 'react';
import {Link} from 'react-router';
import CounterButton from '../components/CounterButton';
import GithubButton from '../components/GithubButton';

import SearchBar from '../components/SearchBar';

export default class Home extends Component {
  render() {
    const styles = require('./Home.scss');
    // require the logo image both from client and server
    const logoImage = require('./logo.png');
    return (
      <div >
        <SearchBar  change={::this.handleChange} search={::this.handleSearch}/>
      </div>
    );
  }

  handleChange(queryString) {
    console.log('handleChange queryString='+ queryString);
  }

  handleSearch(queryString) {
    ::this.transitionTo('/findjobs', {page: 10}, {queryString: queryString});
  }
}
