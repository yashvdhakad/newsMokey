import React, { Component } from 'react'
import NewsItems from "./NewsItems"
import Spinner from "../components/Spinner"
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 100,
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
      loading: true,
      page: 1,
      totalResults: 0
    }
  }

  async updateNews() {
    this.props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7ad68a3123654c17b9caf03019dbd6c6&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      totalResults: parseData.totalResults,
      articles: parseData.articles,
      loading: false
    })
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updateNews();
  }

  preClickHandler = async () => {
    this.setState({
      page: this.state.page - 1,
    })
    this.updateNews();
  }
  nextClickHandler = async () => {
    this.setState({
      page: this.state.page + 1,
    })
    this.updateNews();
  }

  fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7ad68a3123654c17b9caf03019dbd6c6&page=${this.state.page}`;
    this.setState({page: this.state.page + 1})
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      totalResults: this.state.articles.concat(parseData.totalResults),
      articles: parseData.articles,
    })
  };

  render() {
    return (
      <>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className='px-40 py-20 flex flex-col space-y-4'>
            {this.state.articles.map((e) => {
              return <NewsItems Items key={e.url} title={e.title} description={e.description} imgUrl={e.urlToImage} newsUrl={e.url} source={e.source.name} date={e.publishedAt} />
            })}
          </div>
        </InfiniteScroll>

        {/* <div className="p-20 flex justify-evenly">
          <button disabled={this.state.page <= 1} className='py-2 px-4 bg-zinc-800 text-zinc-200 font-bold rounded-lg' onClick={this.preClickHandler}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className='py-2 px-4 bg-zinc-800 text-zinc-200 font-bold rounded-lg' onClick={this.nextClickHandler}>Next &rarr;</button>
        </div> */}
      </>
    )
  }
}

export default News