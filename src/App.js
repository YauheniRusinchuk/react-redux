import React, { Component } from 'react';
import NewsList from './components/news/newsList';
import configureStore from './store/configureStore';


const store = configureStore();


class App extends Component {

  render() {
    return (
      <div>
        <NewsList />
      </div>
    );
  }
}

export default App;
