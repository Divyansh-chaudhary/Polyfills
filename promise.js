function CustomPromise(executer) {
  let response,
    error,
    onThen,
    onCatch,
    isFullfield = false,
    isSuccess = false,
    isFailed = false,
    isHandlerCalled = false;
  this.then = function (_onThen) {
    onThen = _onThen;
    if (isFullfield && isSuccess) {
      onThen(response);
      isHandlerCalled = true;
    }
    return this;
  };
  this.catch = function (_onCatch) {
    onCatch = _onCatch;
    if (isFullfield && isFailed) {
      onCatch(error);
      isHandlerCalled = true;
    }
    return this;
  };
  function resolve(_response) {
    isSuccess = true;
    isFullfield = true;
    response = _response;
    if (typeof onThen === "function" && !isHandlerCalled) {
      onThen(response);
      isHandlerCalled = true;
    }
  }
  function reject(_error) {
    isFailed = true;
    isFullfield = true;
    error = _error;
    if (typeof onCatch === "function" && !isHandlerCalled) {
      onCatch(response);
      isHandlerCalled = true;
    }
  }
  executer(resolve, reject);
}

const promise = new CustomPromise((resolve) => {
  resolve(1);
});
const waitpromise = new CustomPromise((resolve) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});
promise
  .catch((error) => {
    console.log("error :>> ", error);
  })
  .then((response) => {
    console.log("promise response :>> ", response);
  });

waitpromise.then((response) => {
  console.log("waitpromise response :>> ", response);
});
