import React from 'react';
import './style/style.css'
import View from './viewMessage';
import Addpost from './addpost';


class Chat extends React.Component {

  render(){
    return(
      <div className="chat">
        <View />
        <Addpost />
       </div>
    );
  }
}

export default Chat;
