# Promises and Fetch

## Resources

If you haven't already seen the [loupe][loupe-site] video and playground when experimenting with events, play with this site to help them build an intuition for the execution stack.

#### [Intro to Promises][promises-video]
#### [MDN Promises][mdn-promises]
#### [We Have a Problem With Promises][problem-promises]


## Introduction to Async

* Javascript is _synchronous_
  * It executes statements one at a time
* But... sometimes things take a long time
  * We don't want these things to block UI rendering
  * When we are waiting for javascript to run, the page is not responsive

```
function sleep(n) {
  var i = 0
  while(i < (12 ** 8) * n) {
    i++
  }
}

sleep(10)
```

* Instead of waiting for things to happen _synchronously_, we want to have some code run later
* What patterns have we seen to handle this kind of problem already?
  * Callback functions as handlers for event listeners
  * `setTimeout` and `setInterval`
* That code runs _asynchronously_

## Examples of Sync and Async code
* Ask students to suggest examples of code that runs sync and async

Synchronous:
- Most of ruby
- `sleep`, `RestClient.get`

Asynchronous:
- `setTimeout` and `setInterval`
- event listeners
- database access
- network calls

* So far, we've used _callback functions_ to set up code to run later
* Promises are another way of writing async code

## What is a Promise?
* Promises are a container for data that will show up later
  * And, information about whether the data is there yet
* Metaphors:
  * Coffee that you've set to brew
  * Online order confirmation email / receipt

> Warning: Potential rabbit-hole. It’s tempting to go to deep into the Promise API - we want to make sure that students understand the high level of a Promise, and be ready to use lots of fetches. It’s rare that they’ll use the Promise constructor, Promise.resolve, Promise.race, or even Promise.all.

### Example of Promises with Fetch
* Let's see some real-live promises!
* We're going to use `fetch`, which is a function for sending HTTP requests
(in the console:)

```js
var url = "https://dog.ceo/api/breeds/image/random"
var promise = fetch(url)
promise
```

* See that the `promise` object doesn't have the _response_ but instead a _box with the response inside_
* `.then` - We can add a handler that runs when the response arrives

```js
function afterResolved() {
  console.log('resolved')
}
promise.then(afterResolved)
```

* `.then` is like adding an event handler - it has code to run later
* But we can also still see the promise itself - we have the object!

```js
function otherFunction() {
  console.log('another thing!?!?')
}
promise.then(otherFunction)
```

### Promise Methods: `then` and `catch`

* `then` is a little bit different from event listener callbacks.
* `then` is Chainable:

```js
var promise = fetch(url)
promise
.then(() => console.log('resolved'))
.then(() => console.log('after logging resolved'))
.then(() => console.log('after logging after resolved'))
```

_Common Bug_: evaluating a function instead of passing it to `then`

Q: When will the message be logged?
```js
var promise = fetch(url)
promise.then(console.log("message"))
```

A: Before the fetch resolves!

Fix is to use an anonymous function (with the `function` keyword or an arrow)

* Error Handling with `catch`
* If there's an error on the other end of the fetch, you can handle the error with `catch`

```js
fetch("https://www.google.com")
.then(res => console.log(res))
.catch(error => console.log("Here's the error:", error))
```

* The cool bonus that we get from `catch` - if there's an error somewhere in our `then` handler, we'll catch that too!

### An Intro to `fetch`
* Let's take a closer look at the `fetch` method.

```js
fetch("https://dog.ceo/api/breeds/list/all")
.then(res => console.log(res))
```

* We get back a Promise from `fetch`, which we can add handlers to with `then`
* The handler that we pass to `then` gets a `Response` object
* We can call the `.json` method on the `Response` to get a promise for the parsed json from the response

```js
fetch("https://dog.ceo/api/breeds/list/all")
.then(res => res.json())
.then(json => console.log(json))
```

* If the response is not formatted as JSON, we can use `.text` instead

```js
fetch("https://dog.ceo/api/breeds/list/all")
.then(res => res.text())
.then(text => console.log(text))
```

## Challenge

Starting with a file `index.js` with:

```js
var url = "https://dog.ceo/api/breeds/image/random/4"
```

and a standard `index.html` that loads the `index.js`

Add javascript so that
- on page load
- fetch the images
- parse the response as json
- add image elements to the DOM for each image in the array

## Resources

[loupe-site]: http://latentflip.com/loupe
[promises-video]: https://youtu.be/aVNzq8u0F0E
[mdn-promises]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
[problem-promises]: https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html
