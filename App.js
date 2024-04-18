import React, { Component } from "react";
class App extends Component {
  render() {
    return (
      <div>
        {/* <div className='header'>
    Phone directory
    </div>
    <button>Add</button>
    <div>
      <span>Name</span><br></br>
      <span>Phone</span>
    </div> */}
    <p>Hello World</p>
    <label htmlFor="name">Name:</label>
    <input id="name" type="text" placeholder="type here" defaultValue="vaibhav"/>
      </div>
    );
  }
}
export default App;
