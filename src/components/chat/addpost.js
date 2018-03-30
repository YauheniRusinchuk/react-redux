import React from 'react';


class Addpost extends React.Component {

  state = {
    text: '',
    post: []
  }

  onSubmit = (e) => {
    e.preventDefault();
    const {text} = this.state;
    const {post} = this.state;
    post.push(text);
    this.setState({
      text: '',
      post: post,
    })
    console.log(this.state.post)
  }

  onChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    });
  }


  render(){
    return(
      <div className="addpost">
      <form onSubmit={this.onSubmit}>
        <input
            type="text"
            name="text"
            onChange={this.onChange}
            value={this.state.text}
            placeholder="Message"  />
      </form>
      </div>
    );
  }
}


export default Addpost;
