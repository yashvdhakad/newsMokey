import React, { Component } from 'react'

export class NewsItems extends Component {
  render() {
    let {title, description, imgUrl, newsUrl} = this.props;
    return (
      <div className='w-1/4 m-4 p-4 bg-white rounded-lg space-y-2 drop-shadow-md border'>
          <img className='rounded-lg' src={imgUrl} alt="" />
          <h2 className='text-2xl font-bold'>{title}</h2>
          <p className='font-medium'>{description}</p>
          <a href={newsUrl} className='block py-2 px-4 bg-zinc-800 text-zinc-200 font-bold rounded-lg text-center' target="_blank">Read More</a>
      </div>
    )
  }
}

export default NewsItems