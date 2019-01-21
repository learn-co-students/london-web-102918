import React from 'react'

import { Link } from 'react-router-dom'

const HomePage = props =>
  <div>
    <h1>Home Page!</h1>
    <p>We currently have the following routes:</p>
    <p><Link to='/'><b>HomePage:</b></Link> <b>'/'</b></p>
    <p><Link to='/signin'><b>SignInForm:</b></Link> <b>'/signin'</b></p>
    <p><Link to='/inventory'><b>Inventory:</b></Link> <b>'/inventory'</b></p>
    <p>These views are hardcoded and don't do much right now. Our aim for this lecture will be to:</p>
    <p><b>Create a secure Rails backend</b></p>
    <p><b>Plug this client to that backend</b></p>
    <p><b>Learn how to use JWTs for authentication/authorization</b></p>
  </div>

export default HomePage
