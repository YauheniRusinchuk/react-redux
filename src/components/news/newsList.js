import React from 'react';
import './style/newslist.css';
import News from './news';
import {connect} from 'react-redux';
import {fetchRequest} from '../../actions/item';



class NewsList extends React.Component {

  componentDidMount() {
    this
    .props
    .fetchItems("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3853fddd2e404e7aa7739c1bb86c602c")
  }

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


const mapStateToProps = (state) => {
  return {
    items: state.items,
    itemsHasErrored: state.itemsHasErrored
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    fetchItems: (url) => dispatch(fetchRequest(url))
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(NewsList);
