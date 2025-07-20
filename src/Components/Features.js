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
      let url =
        'https://newsapi.org/v2/everything?q=adventure%20OR%20innovation%20OR%20discovery%20OR%20explorer&language=en&pageSize=9&sortBy=publishedAt&apiKey=7c8caccce5ec48c6b5458fa9c873d1f2';

      let data = await fetch(url);
      let parsedData = await data.json();

      this.setState({ articles: parsedData.articles || [] });
    } catch (error) {
      console.error('Fetch error:', error);
      this.setState({ articles: [] });
    }
  }

  render() {
    return (
      <div className="container my-4">
        <h2 className="text-center">🌍 Adventure & Innovation Features</h2>
        <div className="row">
          {this.state.articles && this.state.articles.map((element, index) => (
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
