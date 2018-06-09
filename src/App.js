import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
//

import './app.css';
import Nav from './Nav'
import Content from './Content'

class App extends Component {
  render () {
    return (
      <div className="flex flex-col h-screen">
        <Nav />
        <Content />
      </div>
    )
  }
}

export default hot(module)(App)

