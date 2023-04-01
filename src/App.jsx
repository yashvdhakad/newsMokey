import './App.css'
import Navbar from "./components/Navbar"
import News from "./components/News"

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div className='max-w-screen-2xl m-[auto]'> 
      <Navbar title="📰 NewsMonk" />
      <News pageSize={3} country="in" category="business" />
      </div>
    )
  }
}
