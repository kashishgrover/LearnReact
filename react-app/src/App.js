import React from 'react';

class App extends React.Component{
  constructor() {
    super();
    this.state= {
      txt: 'This is the default text from constructor',
      cat: 0
    }
  }

  updateState(evt) {
    this.setState({txt: evt.target.value})
  }

  render() {
    return (
      <div>
        <h1>{this.state.txt} - {this.state.cat}</h1>
        <Widget update={this.updateState.bind(this)} />
        {/* Note the prop 'update' of the Widget node */}        
        <Widget update={this.updateState.bind(this)} />
      </div>
    );
  }
}

const Widget = (props) =>
  <input type="text" onChange={props.update} />

export default App
