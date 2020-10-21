import React, { Component } from "react";
import "../styles/App.css";

class App extends Component {

  state = {
    para : ""
  }

 addPara = () => {
    this.setState({
    para: "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy",
    })
 }


  render() {
    return (
      <div id="main">
        {/* Do not remove this main div!! */}
        <button onClick={this.addPara}>Show Para</button>
        <p>{this.state.para}</p>
      </div>
    );
  }
}

export default App;
