import React from 'react';


class View extends React.Component {
  render(){
    return(
      <div className="view">
        <span className="comment">This is first comment</span>
        <span className="comment">This is second comment</span>
        <span className="comment">I like react</span>
        <span className="comment">I like react and redux</span>
        <span className="comment">I like react-native</span>
       </div>
    );
  }
}

export default View;
