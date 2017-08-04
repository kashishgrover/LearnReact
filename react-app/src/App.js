import React from 'react';

class App extends React.Component{
  constructor() {
    super();
    this.state= {
      txt: 'This is the default text',
      cat: 0
    }
  }

  updateState(evt) {
    this.setState({txt: evt.target.value})
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.updateState.bind(this)} />
        <h1>{this.state.txt} - {this.state.cat}</h1>
      </div>
    );
  }
}

export default App
