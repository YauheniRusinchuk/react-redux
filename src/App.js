import React, { Component } from 'react';
import NewsList from './components/news/newsList';
import Chat from './components/chat/chat';
import {connect} from 'react-redux';
import {fetchRequest} from './actions/item';



class App extends Component {


  componentDidMount() {
      this.props.fetchItems("https://newsapi.org/v2/top-headlines?sources=google-news-ru&apiKey=3853fddd2e404e7aa7739c1bb86c602c")
  }

  render() {
    return (
      <div>
        <NewsList items={this.props.items}/>
        <Chat />
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




export default connect(mapStateToProps, mapDispatchToProps)(App);
