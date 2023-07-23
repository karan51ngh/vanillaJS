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
    Promise p1;
    p1.resolve('some value');
    p1.then(function(string) { // <-- This will happen after the above Promise resolves (returning the value 'some')
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
- The `fetch()` function returns a **Promise** that **resolves** to the **Response object** representing the response to the request. You can chain .then() to handle the response once it's available and .catch() to handle any errors that may occur during the request.
- The Response object represents the **response to a request** made using the Fetch API. It contains information about the response **status**, **headers**, and the actual **data**.
- You can access the response data using various methods provided by the Response object:
  - `json()`: Parses the response body as **JSON** and **returns a Promise** that resolves to the parsed data. This is a promise, because parsing a data can be time consuming.
  - `text()`: Reads the response body and **returns a Promise** that resolves to the **text** content.
  - `blob()`: Returns a Promise that resolves to a Blob object representing the response body.
  - `arrayBuffer()`: Returns a Promise that resolves to an ArrayBuffer containing the response body.
- The fetch() function allows you to **configure** the request by providing an optional second parameter, an object literal, that allows you to set various request options such as method, headers, body, etc.
- Example 1:
  ```js
  fetch('https://some-api.com/data')
  .then((response) => { return response.json()})
  .then((data) => {
      console.log(data);
  })
  .catch(error => {
      console.error('Error:', error);
  });
  ```
    - The fetch() method is used to make a request to the server located at "https://some-api.com/data". The returned value is a promise that will be fulfilled with the server's response.
    - The first .then() method is called to consume the promise and extract JSON data from the response.
    - The next .then() method is called to use the extracted data to the console.
    - If any errors occur, they will be caught in the catch() method and logged to the console.
- Example 2:
  ```js
  fetch('https://api.example.com/data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ key: 'value' })
  })
    .then(response => {
      // handle the response
    })
    .catch(error => {
      // handle errors
    });

  ```
- Handeling Errors:
  - When using the Fetch API, errors are not automatically thrown for failed HTTP responses (e.g., 404 or 500 errors). Instead, the fetch() Promise only rejects when there is a network error or when the request is aborted.
  - You need to explicitly check the ok property of the Response object to determine if the request was successful or not.
  - `response.ok` is a boolean indicating whether the response was successful (status in the range 200 – 299) or not.
  ```js
  fetch('https://api.example.com/data')
    .then(response => {
      if (response.ok) { // checks wether the status range is correct or not
        return response.json(); //this is a promise
      } else {
        throw new Error('Request failed');
      }
    })
    .then(data => {
      // handle the parsed response data
    })
    .catch(error => {
      // handle errors
    });

  ```