import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as jobsActions from '../ducks/jobs';
import {isLoaded, search as loadJobs} from '../ducks/jobs';

import SearchBar from '../components/SearchBar';
import Jobs from '../components/Jobs';

import Button from 'react-mdl/lib/Button';
import FABButton from 'react-mdl/lib/FABButton';
import IconButton from 'react-mdl/lib/IconButton';
import Icon from 'react-mdl/lib/Icon';
import Card, { CardText, CardActions } from 'react-mdl/lib/card/Card';

@connect(
  state => ({
    jobs: state.jobs.data,
    error: state.jobs.error,
    loading: state.jobs.loading
  }),
  dispatch => ({
    ...bindActionCreators({
      ...jobsActions
    }, dispatch)
  })
)
export default
class FindJobs extends Component {

  // constructor(props) {
  //   super(props);
  //
  // }
  // static defaultProps = {
  //   jobs: [
  //  ]
  // }

  static propTypes = {
    jobs: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool,
    search: PropTypes.func.isRequired
  }

  render() {
    const {jobs, error, loading, search} = this.props;
    const styles = require('./FindJobs.scss');

    //console.log('FindJobs.js ====searchbox jobs='+JSON.stringify(jobs));

    return (
      <div ui grid>
        <div className="ui six column centered grid">
            <div className="six column centered row">
              <img className="ui centered image" src="/greatejoblogo.png" />
            </div>
            <div className="six column centered row">
              <div>
                  <h1>Colored FAB Button</h1>
                  <p>Colored FAB button</p>
                  <FABButton colored={true} ripple={false}>
                      <Icon name="add" />
                  </FABButton>
                  <p>Colored FAB button with ripple</p>
                  <FABButton colored={true}>
                      <Icon name="add" />
                  </FABButton>

                  <h1>FAB Button</h1>
                  <p>FAB Button</p>
                  <FABButton ripple={false}>
                      <Icon name="add" />
                  </FABButton>
                  <p>FAB Button with ripple</p>
                  <FABButton>
                      <Icon name="add" />
                  </FABButton>
                  <p>Disabled FAB Button</p>
                  <FABButton disabled={true}>
                      <Icon name="add" />
                  </FABButton>


                  <h1>Raised Button</h1>
                  <p>Raised button</p>
                  <Button raised={true} ripple={false}>Button</Button>
                  <p>Raised button with ripple</p>
                  <Button raised={true}>Button</Button>
                  <p>Raised disabled button</p>
                  <Button raised={true} disabled={true}>Button</Button>

                  <h1>Colored Raised Button</h1>
                  <p>Raised button</p>
                  <Button raised={true} colored={true} ripple={false}>Button</Button>
                  <p>Accent-colored raised button</p>
                  <Button raised={true} accent={true} ripple={false}>Button</Button>
                  <p>Accent-colored raised button with ripple</p>
                  <Button raised={true} accent={true}>Button</Button>

                  <h1>Flat button</h1>
                  <p>Flat button</p>
                  <Button ripple={false}>Button</Button>
                  <p>Flat button with ripple</p>
                  <Button>Button</Button>
                  <p>Disabled Flat button</p>
                  <Button disabled={true}>Button</Button>

                  <h1>Colored Flat button</h1>
                  <p>Primary-colored Flat button</p>
                  <Button primary={true} ripple={false}>Button</Button>
                  <p>Accent-colored flat button</p>
                  <Button accent={true} ripple={false}>Button</Button>

                  <h1>Icon Button</h1>
                  <p>Icon button</p>
                  <IconButton name="mood" ripple={false} />
                  <p>Colored Icon button</p>
                  <IconButton name="mood" colored={true} ripple={false} />

                  <h1>Mini FAB Button</h1>
                  <p>Mini FAB Button</p>
                  <FABButton mini={true}>
                      <Icon name="add" />
                  </FABButton>
                  <p>Colored Mini FAB Button</p>
                  <FABButton mini={true} colored={true}>
                      <Icon name="add" />
                  </FABButton>
              </div>
              <SearchBar  change={::this.handleChange} search={::this.handleSearch}/>
            </div>
        </div>
        <div className="sixteen wide column">
          <Jobs jobs = {jobs} />
        </div>
      </div>
    )
  }

  handleChange(queryString) {
  	console.log('handleChange queryString='+ queryString);
  }

  handleSearch(queryString) {
    this.props.search(queryString);
  }

  // static fetchData(store) {
  //   if (!isLoaded(store.getState())) {
  //     return store.dispatch(loadJobs());
  //   }
  // }
}
