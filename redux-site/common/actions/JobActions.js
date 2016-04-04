
import types from '../constants/ActionTypes'
import WebAPIUtils from '../utils/WebAPIUtils'

/*
function fetchAllJobs() {
	return WebAPIUtils.getAllJobs();
  //return fetch('https://www.google.com/search?q=secret+sauce')
}

function readAllJobsRequest(jobs) {
    return {
        type: 'READ_ALL_JOBS_REQUEST',		
		jobs
	};
}

function readAllJobsError(err) {
    return {
		type: "READ_ALL_JOBS_ERROR",
		err
	}
}

function readAllJobsSuccess(json) {
    return {
		type: "READ_ALL_JOBS_SUCCESS",
		jobsById: json.jobsById,
		total:  json.total,
		filter: ''
	}
}

// 但是怎样处理异步 action 呢，
// 比如 API 调用，或者是路由跳转？
// now is thunk middlare asyn call

export function readAllDispatch() {
	console.log( 'jobaction readAll run' );
	
	//first dispatch request 
	//dispatch(readAllJobsRequest);
	// 控制反转！
  // 返回一个接收 `dispatch` 的函数。
  // Thunk middleware 知道如何把异步的 thunk action 转为普通 action。
  
  return ((dispatch) => {
    return fetchAllJobs(job).then(
      result => dispatch(readAllJobsSuccess(result)),
      error => dispatch(readAllJobsError(error))
    )
  })
}
*/

export function readAll() {
	console.log( 'jobaction promise middlare return readAll then use run' )
	return {
		// REQUEST | SUCCESS | ERROR were declared for optimistic update
		types: [ types.READ_ALL_JOBS_REQUEST, types.READ_ALL_JOBS_SUCCESS, types.READ_ALL_JOBS_ERROR ],
		// WebAPIUtils 會操作遠端 REST API 獲取資料
		promise: WebAPIUtils.getAllJobs()//.then( result =>{
			//console.log('ffuckk');
			//console.log( 'preview result: ', result );
		//})
	};
}