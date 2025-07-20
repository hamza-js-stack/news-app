import React, { Component } from 'react';
import NewsItem from './NewsItem';

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount() {
    let url =
      'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=7c8caccce5ec48c6b5458fa9c873d1f2';
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });
  }

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center">Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element, index) => (
            <div className="col-md-4" key={index}>
              <NewsItem
                title={element.title ? element.title.slice(0, 60) : ''}
                description={
                  element.description
                    ? element.description.slice(0, 100)
                    : ''
                }
                imageUrl={
                  element.urlToImage ||
                  'https://images.barrons.com/im-59009637/social'
                }
                newsUrl={element.url}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
