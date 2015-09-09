import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import DocumentMeta from 'react-document-meta';
import {isLoaded as isInfoLoaded, load as loadInfo} from '../ducks/info';
import {isLoaded as isAuthLoaded, load as loadAuth, logout} from '../ducks/auth';
import InfoBar from '../components/InfoBar';
import {createTransitionHook} from '../universalRouter';

const title = 'React Redux Example';
const description = 'All the modern best practices in one example.';
const image = 'https://react-redux.herokuapp.com/logo.jpg';

const meta = {
  title,
  description,
  meta: {
    charSet: 'utf-8',
    property: {
      'og:site_name': title,
      'og:image': image,
      'og:locale': 'en_US',
      'og:title': title,
      'og:description': description,
      'twitter:card': 'summary',
      'twitter:site': '@erikras',
      'twitter:creator': '@erikras',
      'twitter:title': title,
      'twitter:description': description,
      'twitter:image': image,
      'twitter:image:width': '200',
      'twitter:image:height': '200'
    }
  }
};

@connect(
    state => ({user: state.auth.user}),
    dispatch => bindActionCreators({logout}, dispatch))
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    user: PropTypes.object,
    logout: PropTypes.func.isRequired
  }

  static contextTypes = {
    router: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
  };

  componentWillMount() {
    const {router, store} = this.context;
    this.transitionHook = createTransitionHook(store);
    router.addTransitionHook(this.transitionHook);
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.user && nextProps.user) {
      // login
      this.context.router.transitionTo('/loginSuccess');
    } else if (this.props.user && !nextProps.user) {
      // logout
      this.context.router.transitionTo('/');
    }
  }

  componentWillUnmount() {
    const {router} = this.context;
    router.removeTransitionHook(this.transitionHook);
  }

  componentDidUpdate() {
    componentHandler.upgradeDom();
  }

  render() {
    const {user} = this.props;
    const styles = require('./App.scss');
    return (
      <div >
        <DocumentMeta {...meta}/>

        <div className="greatejob-layout-waterfall mdl-layout mdl-js-layout">
          <header className="mdl-layout__header mdl-layout__header--waterfall">
            {/*<!-- Top row, always visible --> */}
            <div className="mdl-layout__header-row">
              {/*<!-- Title -->*/}
              <span className="mdl-layout-title">GreateJob</span>
              <div className="mdl-layout-spacer"></div>
              {/* <!-- Navigation --> */}
              <nav className="mdl-navigation">
                <a className="mdl-navigation__link" href="/">Find Jobs</a>
                <a className="mdl-navigation__link" href="">Employers / Post Job</a>
                <a className="mdl-navigation__link" href="">Upload your resume</a>
                <a className="mdl-navigation__link" href="">Sign in</a>
              </nav>
            </div>
          </header>
          <div className="mdl-layout__drawer">
            <span className="mdl-layout-title">GreateJob</span>
            <nav className="mdl-navigation">
              <a className="mdl-navigation__link" href="/">Find Jobs</a>
              <a className="mdl-navigation__link" href="">Post Job</a>
              <a className="mdl-navigation__link" href="">Submit resume</a>
              <a className="mdl-navigation__link" href="">Sign in</a>
            </nav>
          </div>
          <main className="mdl-layout__content">
            <div className="page-content">{/*<!-- Your content goes here -->*/}
              {this.props.children}

            </div>

            {/*footer bar */}
            <footer className="greate-footer mdl-mini-footer">
                <div className="mdl-mini-footer__left-section">
					<ul className="mdl-mini-footer__link-list">
                    <li><a href="/about">About</a></li>
                    <li><a href="#">Terms</a></li>
                    <li><a href="#">Partners</a></li>
                    <li><a href="#">Updates</a></li>
                  </ul>
                </div>
				
				<div className="mdl-mini-footer__right-section">
					<ul className="mdl-mini-footer__link-list">
                    <li className="mdl-mini-footer--social-btn"><a title="Twitter" role="button" className="social-btn social-btn__twitter" href="https://twitter.com/googledesign"><i className="fa fa-twitter fa-fw"></i></a></li>
                    <li>
						<a href="#">Terms</a>
						
						<a href="#" class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
						  <i class="material-icons">share</i>
						</a>
					</li>
                    <li><a href="#">Partners</a></li>
                    <li><a href="#">Updates</a></li>
                  </ul>
                </div>              
            </footer>
          </main>
        </div>
      </div>
    );
  }


  handleLogout(event) {
    event.preventDefault();
    this.props.logout();
  }

  static fetchData(store) {
    const promises = [];
    if (!isInfoLoaded(store.getState())) {
      promises.push(store.dispatch(loadInfo()));
    }
    if (!isAuthLoaded(store.getState())) {
      promises.push(store.dispatch(loadAuth()));
    }
    return Promise.all(promises);
  }
}
