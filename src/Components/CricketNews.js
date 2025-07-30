import React, { Component } from 'react';
import NewsItem from './NewsItem';

export default class CricketNews extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      error: null,
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    try {
      const url = 'https://newsapi.org/v2/top-headlines?q=cricket&language=en&pageSize=9&sortBy=publishedAt&apiKey=7c8caccce5ec48c6b5458fa9c873d1f2';
      const response = await fetch(url);
      
      // ✅ Check if server gave proper data
      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }

      const parsedData = await response.json();
      this.setState({
        articles: Array.isArray(parsedData.articles) ? parsedData.articles : [],
        loading: false,
        error: null
      });
    } catch (error) {
      console.error('API fetch error:', error);
      this.setState({
        articles: [],
        loading: false,
        error: 'Failed to fetch cricket news. Please try again later.'
      });
    }
  }

  render() {
    const { articles, loading, error } = this.state;

    return (
      <div className="container my-4">
        <h2 className="text-center">🏏 Latest Cricket News</h2>

        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-danger text-center">{error}</p>}

        <div className="row">
          {articles.length > 0 ? (
            articles.map((element, index) => (
              <div className="col-md-4 my-2" key={index}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 60) : 'No Title'}
                  description={element.description ? element.description.slice(0, 100) : 'No Description Available'}
                  imageUrl={element.urlToImage || 'https://via.placeholder.com/300x200.png?text=No+Image'}
                  newsUrl={element.url}
                />
              </div>
            ))
          ) : (
            !loading && !error && <p className="text-center">No cricket news found.</p>
          )}
        </div>
      </div>
    );
  }
}
