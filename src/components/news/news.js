import React from 'react';
import './style/news.css';

export default ({index,title,description,author,url,urlToImage,publishedAt}) => {
  return(
    <div key={index} className="news">
      <a href={url} target="_blank" className="news_title">{title}</a>
      <p className="news_description">{description}</p>
      <img src={urlToImage}  alt="image" />
    </div>
  );
}
