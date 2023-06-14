import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      // <nav className='h-16 px-20 bg-blue-100 text-blue-900 font-bold flex flex-row justify-between items-center rounded-b-lg drop-shadow transition' style={props.emoji === "🌙" ? props.lightMode : props.darkMode}>
      //           <h1>{props.title}</h1>
      //           <div className="flex space-x-6 font-bold cursor-pointer">
      //               <Link to="/">About</Link>
      //               <Link to="/">All Projects</Link>
      //               <Link to="/">Contact</Link>
      //           </div>
      //       </nav>
      <nav className='sticky top-0 z-10 h-16 px-20 bg-zinc-800 text-zinc-200 font-semibold flex justify-between items-center rounded-b-lg drop-shadow transition'>
                <h1 className='font-bold'><Link to="/">{this.props.title}</Link></h1>
                <div className="flex space-x-6">
                    <Link to="/">General</Link>
                    <Link to="/business">Business</Link>
                    <Link to="/entertainment">Entertainment</Link>
                    <Link to="/health">Health</Link>
                    <Link to="/science">Science</Link>
                    <Link to="/sports">Sports</Link>
                    <Link to="/technology">Technology</Link>
                </div>
                <div className="flex space-x-6">
                    <Link to="/about">About</Link>
                    <Link to="/projects">All Projects</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </nav>
    )
  }
}
