## CustomPromise class

we can pass an executer in CustomPromise which receives resolve and reject functions we can call CustomPromise with some wait time of immediate execution, also we can add chaining of then and catch and we can call catch first or after both are handled

# Examples

```
const promise = new CustomPromise((resolve) => {
  resolve(1);
});

promise
  .catch((error) => {
    console.log("error :>> ", error);
  })
  .then((response) => {
    console.log("promise response :>> ", response);
  });

const waitpromise = new CustomPromise((resolve) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});


waitpromise.then((response) => {
  console.log("waitpromise response :>> ", response);
});
```
