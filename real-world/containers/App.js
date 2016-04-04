import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { pushState } from 'redux-router'
import {Link } from 'react-router'
import Explore from '../components/Explore'
import { resetErrorMessage } from '../actions'

class App extends Component {
  render() {
    const { children } = this.props
    return (
      <div>     
        {children}
      </div>
    )
  }
}

App.propTypes = {
  // Injected by React Redux
  //inputValue: PropTypes.string.isRequired,
  // Injected by React Router
  children: PropTypes.node
}

function mapStateToProps(state) {
  return {
  }
}

export default connect(mapStateToProps, {
})(App)
