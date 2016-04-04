import Immutable from 'immutable';
import {JobState, JobRecord, convertToRecordMap } from '../constants/Types';
import createReducer from '../utils/createReducer';
import types from '../constants/ActionTypes';

function READ_ALL_JOBS_REQUEST( state, action ){ return state; }
function READ_ALL_JOBS_ERROR( state, action ){ return state; }
function READ_ALL_JOBS_SUCCESS( state, action ){
	console.log('fuck job reducer call');
	return state.update( 'jobsById', map => action.result )
}

const handlers =
{
	[types.READ_ALL_JOBS_REQUEST]: READ_ALL_JOBS_REQUEST,
	[types.READ_ALL_JOBS_SUCCESS]: READ_ALL_JOBS_SUCCESS,
	[types.READ_ALL_JOBS_ERROR]: READ_ALL_JOBS_ERROR,
}

export default createReducer( new JobState(), handlers );
