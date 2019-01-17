import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'semantic-ui-css/semantic.css'
import App from './App'

import { ThemeProvider } from 'styled-components'

import { BrowserRouter as Router } from "react-router-dom";


const theme = {
  colors: {
    primary: 'red'
  }
}
ReactDOM.render(
  <ThemeProvider theme={theme}>
  <Router>
    <App />
  </Router>
  </ThemeProvider>,
document.getElementById('root'))
