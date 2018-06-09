import React, { Component } from 'react'

class Nav extends Component {
  render () {
    return (
      <nav className="flex items-center justify-between flex-wrap p-6">
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a href="https://s3-us-west-1.amazonaws.com/gmanu.me/public/gmanu_resume.pdf" className="text-xl block mt-4 lg:inline-block lg:mt-0 text-green hover:text-white mr-4" target="blank">
              Resume
            </a>
            <a href="https://sysbytes.wordpress.com/" className="text-xl block mt-4 lg:inline-block lg:mt-0 text-green hover:text-white" target="blank">
              Blog
            </a>
            <a href="mailto:manugupt1@gmail.com" className="text-xl block mt-4 lg:inline-block lg:mt-0 text-green hover:text-white">
              Email
            </a>
          </div>
        </div>
      </nav>)
  }
}

export default Nav
