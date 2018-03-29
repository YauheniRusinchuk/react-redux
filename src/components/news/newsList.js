import React from 'react';
import './style/newslist.css';
import News from './news';

class NewsList extends React.Component {
  render(){
    return(
      <div className="newslist">
          {
            this.props.items.map((item,index) => (
              <News key={index}
                    title={item.title}
                    description={item.description}
                    author={item.author}
                    url={item.url}
                    urlToImage={item.urlToImage}
                    publishedAt={item.publishedAt}
              />
            ))
          }
      </div>
    );
  }
}

export default NewsList;
