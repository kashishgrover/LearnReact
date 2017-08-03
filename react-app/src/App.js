import React from 'react';

class App extends React.Component{
  render() {
    let txt = this.props.txt;
    let num = this.props.cat;
    return (
      <div>
        <h1>Hello World</h1>
        <article>{txt}</article>
        <p>{num}</p>
      </div>
    );
  }
}

//This is how prop types are assigned to the class
App.propTypes = {
  txt: React.PropTypes.string,
  // Note how isRequired will help throw a warning if the value is not assigned
  cat: React.PropTypes.number.isRequired
}

//Assigning default values
App.defaultProps = {
  txt: "This is the default text."
}

export default App
