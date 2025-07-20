import React, { Component } from 'react';
import NewsItem from './NewsItem';

export default class CricketNews extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount() {
    try {
      const url = 'https://newsapi.org/v2/top-headlines?q=cricket&language=en&pageSize=9&sortBy=publishedAt&apiKey=7c8caccce5ec48c6b5458fa9c873d1f2';
      const data = await fetch(url);
      const parsedData = await data.json();
      this.setState({ articles: parsedData.articles || [] });
    } catch (error) {
      console.error('Cricket API error:', error);
      this.setState({ articles: [] });
    }
  }

  render() {
    return (
      <div className="container my-4">
        <h2 className="text-center">🏏 Latest Cricket News</h2>
        <div className="row">
          {this.state.articles.map((element, index) => (
            <div className="col-md-4 my-2" key={index}>
              <NewsItem
                title={element.title ? element.title.slice(0, 60) : 'No Title'}
                description={element.description ? element.description.slice(0, 100) : 'No Description Available'}
                imageUrl={element.urlToImage || 'https://static.toiimg.com/thumb/msid-104161914,width-1070,height-580,imgsize-33270,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg'}
                newsUrl={element.url}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
