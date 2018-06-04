import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
//

import './app.css'

class App extends Component {
  render () {
    return (
      <div className="flex flex-col h-screen">
        <nav className="flex items-center justify-between flex-wrap p-6">
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
              <a href="https://s3-us-west-1.amazonaws.com/gmanu.me/public/gmanu_resume.pdf" className="text-xl block mt-4 lg:inline-block lg:mt-0 text-green hover:text-white mr-4" target="blank">
                Resume
              </a>
              <a href="https://sysbytes.wordpress.com/" className="text-xl block mt-4 lg:inline-block lg:mt-0 text-green hover:text-white" target="blank">
                Blog
              </a>
            </div>
          </div>
        </nav>
        <div className="flex-grow flex-shrink p-8 inline-flex items-center">
          <div className="font-mono text-3xl text-green tracking-wide shadow-inner">
            Manu Gupta writes code. In his free time, he hangs out with his friends, tries out
            new places to eat, and bikes in Ann Arbor.
          </div>
        </div>
      </div>
    )
  }
}

export default hot(module)(App)

