import React, { Component } from 'react'
import Newsitem from './Newsitem'
import InfiniteScroll from "react-infinite-scroll-component";
import jokes from "./images/jokes.webp"

export default class Jokes extends Component {
  constructor() {
    super()
    this.state = {
      pageSize: 12,
      articles: [],
      totalResults: 0,
      page: 1
    }
  }
  async getData() {
    var rawdata = await fetch(`https://newsapi.org/v2/everything?q=jokes&language=hi&sortBy=publishedAt&pageSize=${this.state.pageSize}&page=${this.state.page}&apiKey=33d61ae39c3c49ce8bec7e9b0924938a`)
    var result = await rawdata.json()
    this.setState({
      articles: result.articles,
      totalResults: result.totalResults
    })
  }
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 })
    var rawdata = await fetch(`https://newsapi.org/v2/everything?q=jokes&language=hi&sortBy=publishedAt&pageSize=${this.state.pageSize}&page=${this.state.page}&apiKey=33d61ae39c3c49ce8bec7e9b0924938a`)
    var result = await rawdata.json()
    this.setState({ articles: this.state.articles.concat(result.articles), })
  }
  componentDidMount() {
    this.getData()
  }
  render() {
    return (
      <>
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={jokes} class="d-block w-100 img" alt="..."/>
            </div>
          </div>
        </div>
        <h5 className='background text-light text-center p-2'>Latest News</h5>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={<h4>Loading...</h4>}
        >
          <div className='row'>
            {
              this.state.articles.map((item, index) => {
                return <Newsitem
                  key={index}
                  title={item.title}
                  desc={item.description}
                  img={item.urlToImage}
                  url={item.url}
                />
              })
            }
          </div>
        </InfiniteScroll>
      </>
    )
  }
}
