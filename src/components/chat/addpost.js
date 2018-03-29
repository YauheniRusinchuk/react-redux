import React from 'react';


class Addpost extends React.Component {

  state = {
    text: ''
  }


  onSubmit = (e) => {
    e.preventDefault();
    console.log("ENTER .....");
  }

  onChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
    console.log(this.state.text)
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
