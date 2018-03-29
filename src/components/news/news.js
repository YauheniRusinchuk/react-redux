import React from 'react';
import './style/news.css';

export default ({index,title,description,author,url,urlToImage,publishedAt}) => {
  return(
    <div key={index} className="news">
      <p className="news_title">{title}</p>
      <p>{description}</p>
    </div>
  );
}
