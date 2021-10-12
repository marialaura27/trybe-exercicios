import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      bg: "blue"
    }
    this.handleClick = this.handleClick.bind(this)
    
  }

  handleClick() {
    this.setState({
      bg: this.state.bg === "blue" ? "red" : "blue",
    })
  }
  render() {
    return <button
      onClick={this.handleClick} style={{backgroundColor: this.state.bg}}>
      Clicar
      </button>
  }

}

export default App;
