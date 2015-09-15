const SEARCH = 'redux-example/jobs/SEARCH';
const SEARCH_SUCCESS = 'redux-example/jobs/SEARCH_SUCCESS';
const SEARCH_FAIL = 'redux-example/jobs/SEARCH_FAIL';

const initialState = {
  loaded: false,
  pageNum: 0,
  jobs: []
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        loading: true
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        jobs: action.result.jobs,
        pageNum: action.result.pageNum,
        error: null
      };
    case SEARCH_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        data: null,
        pageNum: 0,
        error: action.error
      };
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.jobs && globalState.jobs.loaded;
}

export function search(queryString) {
  return {
    types: [SEARCH, SEARCH_SUCCESS, SEARCH_FAIL],
    promise: (client) => client.post('/loadJobs', {
      data: {
        queryString: queryString
      }
    })
  };
}
