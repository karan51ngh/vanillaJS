## JavaScript

### Synchronous vs Asynchronous nature of Javascript
- **Synchronous** programming is a way for computers to do things **one step at a time**, in the order they are given the instructions.
- However, synchronous programming can be problematic in certain situations, particularly when dealing with tasks that take a significant amount of time to complete.
	> For example, let's say that a synchronous program performs a task that requires waiting for a response from a remote server. The program will be stuck waiting for the response and cannot do anything else until the response is returned.
- **Asynchronous** programming is a way for a computer program to handle multiple tasks **simultaneously** rather than executing them one after the other.
- Asynchronous programming allows a program to continue working on other tasks while waiting for external events, such as network requests, reading files etc.
### Callbacks
A **callback function** is a function that is passed as an argument to another function and is executed **later** when a certain event or **condition** occurs.
- Callback functions are commonly used in asynchronous programming and event handling. 
- They allow you to define custom behavior that should happen after a particular operation or event completes.
- Example:
    ```js
    function fetchData(url, callback) {
    // Simulating an asynchronous operation (e.g., making an API request)
    setTimeout(function() {
        const data = ...; // Some data retrieved from the server
        callback(data); // Invoke the callback function with the retrieved data
    }, 2000); // Simulate a delay of 2 seconds
    }

    // Usage: Pass the callback function as an argument to fetchData
    fetchData("https://example.com/api/data", processFetchedData);
    ```
- #### Callback Hell:
    - When many callbacks are nested, the code can be complex and hard to read and understand.
    - This happens when you chain multiple callbacks together, one after the other, creating a pyramid-like structure of indentation called callback hell, also known as the **"Pyramid of Doom"**.
    - Example:
    ```js
    getData(function(a) {
      getMoreData(a, function(b) {
        getEvenMoreData(b, function(c) {
          getEvenEvenMoreData(c, function(d) {
            getFinalData(d, function(finalData) {
              console.log(finalData);
            });
          });
        });
      });
    }
    ```
    - In this example:
        - The getData function takes a callback as an argument and is executed after data is retrieved.
        - The callback function then takes the data and calls the getMoreData function, which also takes a callback as an argument, and so on.
### Promises
A **Promise** is an object that represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.

Example:
```js
var promise = new Promise(function(resolve, reject) {
  // do thing, then…

  if (/* everything worked */) {
    resolve("See, it worked!");
  }
  else {
    reject(Error("It broke"));
  }
});
```
- A Promise exists in one of these states:
    - **Pending**: initial state, neither fulfilled nor rejected.
    - **Fulfilled**: operation completed successfully.
    - **Rejected**: operation failed.
- The Promise object works as **proxy for a value** not necessarily known when the promise is created. It allows you to **associate handlers** with an asynchronous action’s eventual success value or failure reason.
- By creating a promise, you are essentially telling the JavaScript engine to "promise" to perform a specific action and notify you once it is completed or fails.
- Callback functions are then attached to the promise to handle the outcome of the action. 
- These callbacks will be invoked when the promise is fulfilled (action completed successfully) or rejected (action failed).
- This lets asynchronous methods return values like synchronous methods. Instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.
- #### Using ‘Then’ (Promise Chaining)
    - To take several asynchronous calls and synchronize them one after the other, you can use promise chaining. 
    - This allows using a value from the first promise in later subsequent callbacks.
    ```js
    Promise.resolve('some')
    .then(function(string) { // <-- This will happen after the above Promise resolves (returning the value 'some')
        return new Promise(function(resolve, reject) {
        setTimeout(function() {
            string += 'thing';
            resolve(string);
        }, 1);
        });
    })
    .then(function(string) { // <-- This will happen after the above .then's new Promise resolves
        console.log(string); // <-- Logs 'something' to the console
    });
    ```
### Fetch API
- The Fetch API is a built-in JavaScript feature that allows you to make network requests, such as fetching data from a server.
- Example:
    ```js
    fetch('https://some-api.com/data')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
    ```
    - The fetch() method is used to make a request to the server located at "https://some-api.com/data". The returned value is a promise that will be fulfilled with the server's response.
    - The first .then() method is called to consume the promise and extract JSON data from the response.
    - The next then() method is called to log the extracted data to the console.
    - If any errors occur, they will be caught in the catch() method and logged to the console.