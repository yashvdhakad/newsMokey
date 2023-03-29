import React, { Component } from 'react'
import NewsItems from "./NewsItems"

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }

  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=7ad68a3123654c17b9caf03019dbd6c6&page=1";
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({ articles: parseData.articles })
  }

  async preClickHandler = () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=7ad68a3123654c17b9caf03019dbd6c6&page=${this.state.page - 1}`;
    let data = await fetch(url);
    let parseData = await data.json();

    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles
    })
  }
  async nextClickHandler = () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=7ad68a3123654c17b9caf03019dbd6c6&page=${this.state.page + 1}`;
    let data = await fetch(url);
    let parseData = await data.json();

    this.setState({
      page: this.state.page + 1,
      articles: parseData.articles
    })
  }

  render() {
    return (
      <>
        <div className='p-20 flex flex-row flex-wrap justify-between'>
          {this.state.articles.map((e) => {
            return <NewsItems key={e.url} title={e.title} description={e.description} imgUrl={e.urlToImage} newsUrl={e.url} />
          })}
        </div>
        <div className="p-20 flex justify-evenly">
          <button disabled={this.state.page<=1} className='py-2 px-4 bg-zinc-800 text-zinc-200 font-bold rounded-lg' onClick={this.preClickHandler}>&larr; Previous</button>
          <button className='py-2 px-4 bg-zinc-800 text-zinc-200 font-bold rounded-lg' onClick={this.nextClickHandler}>Next &rarr;</button>
        </div>
      </>
    )
  }
}

export default News