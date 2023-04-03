import React, { Component } from 'react'
import NewsItems from "./NewsItems"
import Spinner from "../components/Spinner"
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 3,
    category: "business"
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }

  async updateHandler() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7ad68a3123654c17b9caf03019dbd6c6&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      loading: false
    })
  }

  async componentDidMount() {
    this.updateHandler()

    this.setState({
      totalResults: parseData.totalResults,
    })
  }

  preClickHandler = async () => {
    this.updateHandler()

    this.setState({
      page: this.state.page - 1,
    })
  }
  nextClickHandler = async () => {
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
      this.updateHandler()

      this.setState({
        page: this.state.page + 1,
      })
    }
  }

  render() {
    return (
      <>
        {this.state.loading && <Spinner />}

        <div className='px-40 py-20 flex flex-col space-y-4'>
          {!this.state.loading && this.state.articles.map((e) => {
            return <NewsItems key={e.url} title={e.title} description={e.description} imgUrl={e.urlToImage} newsUrl={e.url} author={e.author} date={e.publishedAt} />
          })}
        </div>

        <div className="p-20 flex justify-evenly">
          <button disabled={this.state.page <= 1} className='py-2 px-4 bg-zinc-800 text-zinc-200 font-bold rounded-lg' onClick={this.preClickHandler}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className='py-2 px-4 bg-zinc-800 text-zinc-200 font-bold rounded-lg' onClick={this.nextClickHandler}>Next &rarr;</button>
        </div>
      </>
    )
  }
}

export default News