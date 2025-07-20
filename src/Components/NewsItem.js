import React from 'react';

const NewsItem = ({ title, description, imageUrl, newsUrl }) => {
  return (
    <div className="card h-100">
      <img
        src={imageUrl}
        className="card-img-top"
        alt="News"
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={newsUrl} className="btn btn-primary mt-auto" target="_blank" rel="noopener noreferrer">
          Read More →
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
