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
      <div>
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">

          <div className="greatejob-header mdl-layout__header mdl-layout__header--waterfall">
          <div className="mdl-layout__header-row">
            <span className="greatejob-title mdl-layout-title">
            <img className="greatejob-logo-image" src="images/android-logo.png" />
            </span>
            {/* <!-- Add spacer, to align navigation to the right in desktop --> */}
            <div className="greatejob-header-spacer mdl-layout-spacer"></div>
            <div className="greatejob-search-box mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label mdl-textfield--align-right mdl-textfield--full-width">
            <label className="mdl-button mdl-js-button mdl-button--icon" for="search-field">
              <i className="material-icons">search</i>
            </label>
            <div className="mdl-textfield__expandable-holder">
              <input className="mdl-textfield__input" type="text" id="search-field" />
            </div>
            </div>
            {/* <!-- Navigation --> */}
            <div className="greatejob-navigation-container">
            <nav className="greatejob-navigation mdl-navigation">
              <a className="mdl-navigation__link mdl-typography--text-uppercase" href="/findjobs">Find jobs</a>
              <a className="mdl-navigation__link mdl-typography--text-uppercase" href="/">Home</a>
              <a className="mdl-navigation__link mdl-typography--text-uppercase" href="">Wear</a>
              <a className="mdl-navigation__link mdl-typography--text-uppercase" href="">TV</a>
              <a className="mdl-navigation__link mdl-typography--text-uppercase" href="">Auto</a>
              <a className="mdl-navigation__link mdl-typography--text-uppercase" href="">One</a>
              <a className="mdl-navigation__link mdl-typography--text-uppercase" href="">Play</a>
            </nav>
            </div>
            <button className="greatejob-more-button mdl-button mdl-js-button mdl-button--icon mdl-js-ripple-effect" id="more-button">
            <i className="material-icons">more_vert</i>
            </button>
            <ul className="mdl-menu mdl-js-menu mdl-menu--bottom-right mdl-js-ripple-effect" for="more-button">
            <li className="mdl-menu__item">5.0 Lollipop</li>
            <li className="mdl-menu__item">4.4 KitKat</li>
            <li disabled className="mdl-menu__item">4.3 Jelly Bean</li>
            <li className="mdl-menu__item">greatejob History</li>
            </ul>
            <span className="greatejob-mobile-title mdl-layout-title">
            <img className="greatejob-logo-image" src="images/android-logo.png" />
            </span>
          </div>
          </div>

          <div className="greatejob-drawer mdl-layout__drawer">
          <span className="mdl-layout-title">
            <img className="greatejob-logo-image" src="images/android-logo-white.png" />
          </span>
          <nav className="mdl-navigation">
            <a className="mdl-navigation__link" href="">Phones</a>
            <a className="mdl-navigation__link" href="">Tablets</a>
            <a className="mdl-navigation__link" href="">Wear</a>
            <a className="mdl-navigation__link" href="">TV</a>
            <a className="mdl-navigation__link" href="">Auto</a>
            <a className="mdl-navigation__link" href="">One</a>
            <a className="mdl-navigation__link" href="">Play</a>
            <div className="greatejob-drawer-separator"></div>
            <span className="mdl-navigation__link" href="">Versions</span>
            <a className="mdl-navigation__link" href="">Lollipop 5.0</a>
            <a className="mdl-navigation__link" href="">KitKat 4.4</a>
            <a className="mdl-navigation__link" href="">Jelly Bean 4.3</a>
            <a className="mdl-navigation__link" href="">greatejob history</a>
            <div className="greatejob-drawer-separator"></div>
            <span className="mdl-navigation__link" href="">Resources</span>
            <a className="mdl-navigation__link" href="">Official blog</a>
            <a className="mdl-navigation__link" href="">greatejob on Google+</a>
            <a className="mdl-navigation__link" href="">greatejob on Twitter</a>
            <div className="greatejob-drawer-separator"></div>
            <span className="mdl-navigation__link" href="">For developers</span>
            <a className="mdl-navigation__link" href="">App developer resources</a>
            <a className="mdl-navigation__link" href="">greatejob Open Source Project</a>
            <a className="mdl-navigation__link" href="">greatejob SDK</a>
          </nav>
          </div>

          <div className="greatejob-content mdl-layout__content">
          <a name="top"></a>
          <div className="greatejob-be-together-section mdl-typography--text-center">


            <div className="greatejob-font greatejob-slogan">
              {this.props.children}
            </div>
          
            <a href="#screens">
            <button className="greatejob-fab mdl-button mdl-button--colored mdl-js-button mdl-button--fab mdl-js-ripple-effect">
              <i className="material-icons">expand_more</i>
            </button>
            </a>
          </div>
          <div className="greatejob-screen-section mdl-typography--text-center">
            <a name="screens"></a>
            <div className="mdl-typography--display-1-color-contrast">Powering screens of all sizes</div>
            <div className="greatejob-screens">
            <div className="greatejob-wear greatejob-screen">
              <a className="greatejob-image-link" href="">
              <img className="greatejob-screen-image" src="images/wear-silver-on.png" />
              <img className="greatejob-screen-image" src="images/wear-black-on.png" />
              </a>
              <a className="greatejob-link mdl-typography--font-regular mdl-typography--text-uppercase" href="">greatejob Wear</a>
            </div>
            <div className="greatejob-phone greatejob-screen">
              <a className="greatejob-image-link" href="">
              <img className="greatejob-screen-image" src="images/nexus6-on.jpg" />
              </a>
              <a className="greatejob-link mdl-typography--font-regular mdl-typography--text-uppercase" href="">Phones</a>
            </div>
            <div className="greatejob-tablet greatejob-screen">
              <a className="greatejob-image-link" href="">
              <img className="greatejob-screen-image" src="images/nexus9-on.jpg" />
              </a>
              <a className="greatejob-link mdl-typography--font-regular mdl-typography--text-uppercase" href="">Tablets</a>
            </div>
            <div className="greatejob-tv greatejob-screen">
              <a className="greatejob-image-link" href="">
              <img className="greatejob-screen-image" src="images/tv-on.jpg" />
              </a>
              <a className="greatejob-link mdl-typography--font-regular mdl-typography--text-uppercase" href="">greatejob TV</a>
            </div>
            <div className="greatejob-auto greatejob-screen">
              <a className="greatejob-image-link" href="">
              <img className="greatejob-screen-image" src="images/auto-on.jpg" />
              </a>
              <a className="greatejob-link mdl-typography--font-regular mdl-typography--text-uppercase mdl-typography--text-left" href="">Coming Soon: greatejob Auto</a>
            </div>
            </div>
          </div>
          <div className="greatejob-wear-section">
            <div className="greatejob-wear-band">
            <div className="greatejob-wear-band-text">
              <div className="mdl-typography--display-2 mdl-typography--font-thin">The best of Google built in</div>
              <p className="mdl-typography--headline mdl-typography--font-thin">
              greatejob works perfectly with your favourite apps like Google Maps,
              Calendar and YouTube.
              </p>
              <p>
              <a className="mdl-typography--font-regular mdl-typography--text-uppercase greatejob-alt-link" href="">
                See what's new in the Play Store&nbsp;<i className="material-icons">chevron_right</i>
              </a>
              </p>
            </div>
            </div>
          </div>
          <div className="greatejob-customized-section">
            <div className="greatejob-customized-section-text">
            <div className="mdl-typography--font-light mdl-typography--display-1-color-contrast">Customised by you, for you</div>
            <p className="mdl-typography--font-light">
              Put the stuff that you care about right on your home screen: the latest news, the weather or a stream of your recent photos.
              <br />
              <a href="" className="greatejob-link mdl-typography--font-light">Customise your phone</a>
            </p>
            </div>
            <div className="greatejob-customized-section-image"></div>
          </div>
          <div className="greatejob-more-section">
            <div className="greatejob-section-title mdl-typography--display-1-color-contrast">More from greatejob</div>
            <div className="greatejob-card-container mdl-grid">
            <div className="mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--3dp">
              <div className="mdl-card__media">
              <img src="images/more-from-1.png" />
              </div>
              <div className="mdl-card__title">
               <h4 className="mdl-card__title-text">Get going on greatejob</h4>
              </div>
              <div className="mdl-card__supporting-text">
              <span className="mdl-typography--font-light mdl-typography--subhead">Four tips to make your switch to greatejob quick and easy</span>
              </div>
              <div className="mdl-card__actions">
               <a className="greatejob-link mdl-button mdl-js-button mdl-typography--text-uppercase" href="">
                 Make the switch
                 <i className="material-icons">chevron_right</i>
               </a>
              </div>
            </div>

            <div className="mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--3dp">
              <div className="mdl-card__media">
              <img src="images/more-from-4.png" />
              </div>
              <div className="mdl-card__title">
               <h4 className="mdl-card__title-text">Create your own greatejob character</h4>
              </div>
              <div className="mdl-card__supporting-text">
              <span className="mdl-typography--font-light mdl-typography--subhead">Turn the little green greatejob mascot into you, your friends, anyone!</span>
              </div>
              <div className="mdl-card__actions">
               <a className="greatejob-link mdl-button mdl-js-button mdl-typography--text-uppercase" href="">
                 greatejobify.com
                 <i className="material-icons">chevron_right</i>
               </a>
              </div>
            </div>

            <div className="mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--3dp">
              <div className="mdl-card__media">
              <img src="images/more-from-2.png" />
              </div>
              <div className="mdl-card__title">
               <h4 className="mdl-card__title-text">Get a clean customisable home screen</h4>
              </div>
              <div className="mdl-card__supporting-text">
              <span className="mdl-typography--font-light mdl-typography--subhead">A clean, simple, customisable home screen that comes with the power of Google Now: Traffic alerts, weather and much more, just a swipe away.</span>
              </div>
              <div className="mdl-card__actions">
               <a className="greatejob-link mdl-button mdl-js-button mdl-typography--text-uppercase" href="">
                 Download now
                 <i className="material-icons">chevron_right</i>
               </a>
              </div>
            </div>

            <div className="mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--3dp">
              <div className="mdl-card__media">
              <img src="images/more-from-3.png" />
              </div>
              <div className="mdl-card__title">
               <h4 className="mdl-card__title-text">Millions to choose from</h4>
              </div>
              <div className="mdl-card__supporting-text">
              <span className="mdl-typography--font-light mdl-typography--subhead">Hail a taxi, find a recipe, run through a temple – Google Play has all the apps and games that let you make your greatejob device uniquely yours.</span>
              </div>
              <div className="mdl-card__actions">
               <a className="greatejob-link mdl-button mdl-js-button mdl-typography--text-uppercase" href="">
                 Find apps
                 <i className="material-icons">chevron_right</i>
               </a>
              </div>
            </div>
            </div>
          </div>

          <footer className="greatejob-footer mdl-mega-footer">
            <div className="mdl-mega-footer--top-section">
            <div className="mdl-mega-footer--left-section">
              <button className="mdl-mega-footer--social-btn"></button>
              &nbsp;
              <button className="mdl-mega-footer--social-btn"></button>
              &nbsp;
              <button className="mdl-mega-footer--social-btn"></button>
            </div>
            <div className="mdl-mega-footer--right-section">
              <a className="mdl-typography--font-light" href="#top">
              Back to Top
              <i className="material-icons">expand_less</i>
              </a>
            </div>
            </div>

            <div className="mdl-mega-footer--middle-section">
            <p className="mdl-typography--font-light">Satellite imagery: © 2014 Astrium, DigitalGlobe</p>
            <p className="mdl-typography--font-light">Some features and devices may not be available in all areas</p>
            </div>

            <div className="mdl-mega-footer--bottom-section">
            <a className="greatejob-link greatejob-link-menu mdl-typography--font-light" id="version-dropdown">
              Versions
              <i className="material-icons">arrow_drop_up</i>
            </a>
            <ul className="mdl-menu mdl-js-menu mdl-menu--top-left mdl-js-ripple-effect" for="version-dropdown">
              <li className="mdl-menu__item">5.0 Lollipop</li>
              <li className="mdl-menu__item">4.4 KitKat</li>
              <li className="mdl-menu__item">4.3 Jelly Bean</li>
              <li className="mdl-menu__item">greatejob History</li>
            </ul>
            <a className="greatejob-link greatejob-link-menu mdl-typography--font-light" id="developers-dropdown">
              For Developers
              <i className="material-icons">arrow_drop_up</i>
            </a>
            <ul className="mdl-menu mdl-js-menu mdl-menu--top-left mdl-js-ripple-effect" htmlFor="developers-dropdown">
              <li className="mdl-menu__item">App developer resources</li>
              <li className="mdl-menu__item">greatejob Open Source Project</li>
              <li className="mdl-menu__item">greatejob SDK</li>
              <li className="mdl-menu__item">greatejob for Work</li>
            </ul>
            <a className="greatejob-link mdl-typography--font-light" href="">Blog</a>
            <a className="greatejob-link mdl-typography--font-light" href="">Privacy Policy</a>
            </div>

          </footer>
          </div>
          </div>
          <a href="https://github.com/google/material-design-lite/blob/master/templates/greatejob-dot-com/" target="_blank" id="view-source" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-color--accent mdl-color-text--accent-contrast">View Source</a>

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
