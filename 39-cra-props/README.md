# React Props

### Identify Components

<img src="../assets/props_and_state.png" width="300" />
<img src="../assets/props_and_state_example.png" width="300" />

In this app we'll use the JSON data in resources/painting_data.js to mimic data we'd be getting from an API.

Why you might need a PaintingList Component? Single responsibility, it's job is to receive some data and render out individual Painting components (or PaintingItem or PaintingCard or whatever you want to call it).

### create-react-app

`create-react-app` is the `rails new` of react.

* `npm install -g create-react-app` (if they haven't)
* `create-react-app my-app` cd into it.
* `npm install --save semantic-ui-css` talk about what the --save does (adds to package.json, why do we care, etc.)
* _Get rid of everything in c-r-a that we don't know what it is. Service workers, css, tests... delete it all_
* Build out static version of the app with right component structure. (bring in Navbar component from morning) Mention that often in React there's like a certain minimum amount of boilerplate needed to be written to get your app up and rendering. I would make components such as

```js
import React from 'react';

const PaintingList = () => {
  return <div>PaintingList</div>;
};

export default PaintingList;
```

so you can see things rendering correctly on page. Reminder that these are _just functions_. A bit different than class-based components seen in labs, but very very similar and all we have seen in lecture thus far. (Students will continue to have confusion over functional components though I show them every lecture, a deficiency in the curriculum?)

### Passing Props

In a top level component like App import the json data from painting_data and show that you can console.log it (in render) and have access to it. Ask the question of how you are going to get this data to the other components that need to know about it?

The answer, via props. _There is one way to pass data from one component to another in React, that is props. They go one direction, down from parent to child. In lecture 1, we passed props as arguments to a function. Even when using JSX that's really how you should think of props._ **Props are like arguments to a function. A component does not own it's own props they are passed to it from outside.** This is in contrast to state which we'll talk about next.

Pass the props from App to PaintingList and console.log them again. Now you are in a situation where you have an array of plain JS objects. What you want back is an array of the same number of elements, but each element should be a React component. What function does that sound like? `map`! We'll use `map` here for the same reason we would use map to take an array of numbers and double each number.

```js
// ====================================
// Step 1
// PaintingList.js
// see the same number of things we should expect
import React from 'react'

const PaintingList = (props) => {
  const allPaintings =  props.paintings.map(painting => <li>hi</li>)

  return (
    <div>
      <ul>
        {allPaintings}
      </ul>
    </div>
  )
}

export default PaintingList

// ====================================
// Step 2
// PaintingList.js
// render Painting Components
import React from 'react'
import Painting from './Painting'

const PaintingList = (props) => {
  const allPaintings =  props.paintings.map(painting => <Painting />)

  return (
    <div>
      <ul>
        {allPaintings}
      </ul>
    </div>
  )
}

export default PaintingList

//Painting.js
import React from 'react'

const Painting = (props) => {
  return <li>Painting Component</li>
}

export default Painting

// ====================================
// Step 3
// show the titles
import React from 'react'
import Painting from './Painting'

const PaintingList = (props) => {
  const allPaintings =  props.paintings.map(painting => <Painting title={painting.title}/>)

  return (
    <div>
      <ul>
        {allPaintings}
      </ul>
    </div>
  )
}

export default PaintingList

//Painting.js
import React from 'react'

const Painting = (props) => {
  return <li>{props.title}</li>
}

export default Painting

// ====================================
// Step 4
// fill out Painting Component
// maybe discuss why it's nicer to pass a prop 'painting'
// vs. a title prop, image prop, artist name prop, dimension prop, etc.
import React from 'react'
import Painting from './Painting'

const PaintingList = (props) => {
  const allPaintings =  props.paintings.map(painting => <Painting painting={painting}/>)

  return (
    <div>
      <ul>
        {allPaintings}
      </ul>
    </div>
  )
}

export default PaintingList

//Painting.js
import React from 'react'

const Painting = (props) => {
  return (
    <li>
      <img src={painting.imageUrl} />
      <h1>{`${painting.title} by ${painting.artist.name}`}</h1>
      <p>{painting.date}</p>
      <p>{`${painting.dimensions.width} x ${painting.dimensions.height}`}</p>
    </li>
  )
}

export default Painting
```

Let's briefly talk about the `key` prop warning. Basically it's for React's internal workings so it can quickly know what components to update when it's doing that thing of updating the real DOM to look like the virtual DOM.

If you want to make the Painting Component look fancy here's some markup: (_NOTE: this also adds the vote button I'll use later_)
(_NOTE: this will need semantic-ui-css to be installed as a node module and inported into the project_)

```js
<div className="item">
  <div className="ui small image">
    <img src={props.painting.image} alt={props.painting.slug} />
  </div>
  <div className="middle aligned content">
    <div className="header">{`"${props.painting.title}" by ${
      props.painting.artist.name
    }`}</div>
    <div className="description">
      <a>
        <i className="large caret up icon" />
        {props.painting.votes} votes
      </a>
    </div>
  </div>
</div>
```

---



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
