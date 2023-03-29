import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      // <nav className='h-16 px-20 bg-blue-100 text-blue-900 font-bold flex flex-row justify-between items-center rounded-b-lg drop-shadow transition' style={props.emoji === "🌙" ? props.lightMode : props.darkMode}>
      //           <h1>{props.title}</h1>
      //           <div className="flex space-x-6 font-bold cursor-pointer">
      //               <a href="/">About</a>
      //               <a href="/">All Projects</a>
      //               <a href="/">Contact</a>
      //           </div>
      //       </nav>
      <nav className='h-16 px-20 bg-zinc-800 text-zinc-200 font-bold flex flex-row justify-between items-center rounded-b-lg drop-shadow transition'>
                <h1>📰 NewsMonk</h1>
                <div className="flex space-x-6 font-bold cursor-pointer">
                    <a href="/">About</a>
                    <a href="/">All Projects</a>
                    <a href="/">Contact</a>
                </div>
            </nav>
    )
  }
}
