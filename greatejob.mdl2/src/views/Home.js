import React, {Component} from 'react';
import {Link} from 'react-router';
import CounterButton from '../components/CounterButton';
import GithubButton from '../components/GithubButton';



export default class Home extends Component {
  render() {
    const styles = require('./Home.scss');
    // require the logo image both from client and server
    const logoImage = require('./logo.png');
    return (
      <div >
        <p> hello homepage </p>
      </div>
    );
  }
}
