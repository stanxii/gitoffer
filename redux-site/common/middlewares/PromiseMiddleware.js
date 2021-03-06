export default function promiseMiddleware( objMethods ) {

  return (next) => (action) => {

    const { promise, types, ...rest } = action;

	console.log('fuck ----xxx--action:' + JSON.stringify(action));
    // 假如傳來的 action 內沒有 promise 屬性，代表不需 async 處理，直接略過
    if (!promise) {
      // console.log( 'promiseMiddleware > 沒 promise > 不處理，且接丟給後手' );
      return next(action);
    }
	
	console.log('What promise???? fuck ----xxx--action:' + JSON.stringify(action));

    // 這裏聰明的將外界傳入的變數，透過 destructuring 轉為常數
    // 因此 middleware 可適用於各種不同情境
    const [REQUEST, SUCCESS, ERROR] = types;

     console.log( '建立 Const: ', REQUEST, SUCCESS, ERROR );

    // 進行第一次的廣播，讓畫面立即更新，也就是 optimistic update
    next({ ...rest, type: REQUEST });

    // 然後偵聽 WebAPI promise 操作結束，發出第二次廣播
    // 這次 type 改為 SUCCESS，因此 store 內知道要依 tid 更新 uid
    return promise
	.then((result) => {
		console.log('fuck promise middleware return' +result);
		console.log('fuck type===success'+ SUCCESS);
		next({ ...rest, result, type: SUCCESS });
		return true;
	}).catch((error) => {
		console.log('fuck error');
		next({ ...rest, error, type: ERROR });
		return false;
    });
  };
}

////////////////////by gaearon solution
// Middleware
/*
export default function promiseMiddleware() {
  return (next) => (action) => {
    const { promise, types, ...rest } = action;
    if (!promise) {
      return next(action);
    }

    const [REQUEST, SUCCESS, FAILURE] = types;
    next({ ...rest, type: REQUEST });
    return promise.then(
      (result) => next({ ...rest, result, type: SUCCESS }),
      (error) => next({ ...rest, error, type: FAILURE })
    );
  };
}

// Usage
function doSomethingAsync(userId) {
  return {
    types: [SOMETHING_REQUEST, SOMETHING_SUCCESS, SOMETHING_FAILURE],
    promise: requestSomething(userId),
    userId
  };
}
*/