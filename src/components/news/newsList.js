import React from 'react';


class NewsList extends React.Component {
  render(){
    return(
      <div>
        {console.log(this.props.items)}
          <h2> Example NewsPost </h2>
      </div>
    );
  }
}

export default NewsList;
