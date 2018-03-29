import React from 'react';
import './style/style.css'
import View from './viewMessage';



class Chat extends React.Component {

  render(){
    return(
      <div className="chat"> CHAT
        <View />
       </div>
    )
  }
}

export default Chat;
