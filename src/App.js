import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
//

import './app.css';
import Nav from './Nav'
import Content from './Content'
import Footer from './Footer'

class App extends Component {
  render () {
    return (
      <div className="flex flex-col h-screen">
        <Nav />
        <Content />
        <Footer />
      </div>
    )
  }
}

export default hot(module)(App)

