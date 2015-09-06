import { combineReducers } from 'redux';

import auth from './auth';
import counter from './counter';
import {reducer as form} from 'redux-form';
import info from './info';
import jobs from './jobs';
import widgets from './widgets';

export default combineReducers({
  auth,
  counter,
  form,
  info,
  jobs,
  widgets
});
