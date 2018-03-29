import React from 'react';
import './App.css';
import NewsList from './components/news/newsList';
import Chat from './components/chat/chat';




const App = () => {
    return (
      <div className="main">
        <NewsList />
        <Chat />
      </div>
    );
  }

export default App;
