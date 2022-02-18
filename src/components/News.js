import React, { Component } from "react";
import NewsItems from "./Newsitems";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

export class News extends Component {


  //loading center 
  

  static defaultProps = {
    country : 'in',
    pageSize: 6,
    category: 'general',


  }

  

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,


  }

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    };


  }

  async componentDidMount() {
    let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=722229a3f08c4949917f1298ae434ae1&pageSize=${this.props.pageSize}`
    this.setState({loading: true})
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
      
    })
    
    
    
  }

  handlePrevButton= async () => {
    let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=722229a3f08c4949917f1298ae434ae1&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
    this.setState({loading: true})
    let data = await fetch(url)
    let parsedData = await data.json()
    
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false
    })   
  }

  handleNextButton = async () => {
    
      let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=722229a3f08c4949917f1298ae434ae1&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
      this.setState({ loading: true})
      let data = await fetch(url)
      let parsedData = await data.json()
  
      this.setState({
          page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false
      })
    

    
  }  

    
  render() {
    
    return (
      <div className="container">
        <h1 className="text-center" style={{margin: "35px"}}>NewsApp </h1>
        <div className="rounded mx-auto d-block">{this.state.loading && <Spinner/>}</div>
         
        <div className="row ">
        {!this.state.loading && this.state.articles.map((element) => {
          return <div className="col-md-4 my-2 " key={element.url}>
          <NewsItems
            title={element.title}
            description={element.description}
            newsUrl={element.url}
            imgUrl={element.urlToImage}
          />
          
        </div>

        })}

         {/* next previous buttons */}
        </div>
            <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" onClick={this.handlePrevButton} className="btn btn-dark">&larr; Previous</button>
            <button disabled= {this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" onClick={this.handleNextButton} className="btn btn-dark">Next &rarr;</button>
          </div> 
          
      </div>
    );
  }
}

export default News;
