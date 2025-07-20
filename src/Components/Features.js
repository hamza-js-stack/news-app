import React, { Component } from 'react';
import NewsItem from './NewsItem';

export default class Features extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount() {
    try {
      const url = 'https://newsapi.org/v2/top-headlines?q=technology&language=en&pageSize=9&sortBy=publishedAt&apiKey=7c8caccce5ec48c6b5458fa9c873d1f2';
      const data = await fetch(url);
      const parsedData = await data.json();
      this.setState({ articles: parsedData.articles || [] });
    } catch (error) {
      console.error('Features API error:', error);
      this.setState({ articles: [] });
    }
  }

  render() {
    return (
      <div className="container my-4">
        <h2 className="text-center">🌍 Adventure & Innovation Features</h2>
        <div className="row">
          {this.state.articles.map((element, index) => (
            <div className="col-md-4 my-2" key={index}>
              <NewsItem
                title={element.title ? element.title.slice(0, 60) : 'No Title'}
                description={element.description ? element.description.slice(0, 100) : 'No Description Available'}
                imageUrl={element.urlToImage || 'https://images.barrons.com/im-59009637/social'}
                newsUrl={element.url}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
