import React from 'react';

//React Custom propType validation

class App extends React.Component{
  render() {
    return (
      <div>
        <Title text="Hello World"/>
        <Lorem text="This is a test"/>
      </div>
    )
  }
}

class Title extends React.Component {
  render() {
    return (<h1>Title: {this.props.text}</h1>)
  }
}

Title.propTypes = {
  text: React.PropTypes.string.isRequired
  //This is about the extent of built in validation react can achieve
}

///////
const Lorem = (props) => (<h2>Lorem ipsum: {props.text}</h2>)

Lorem.propTypes = {
  //There is a possibility to create custom validations as follows:
  text(props, propName, component) {
    if(!(propName in props)) {
      return new Error(`missing ${propName}`)
    }
    if(props[propName].length < 20) {
      return new Error(`${propName} should be greater than 20`)
    }
  }
}
///////

export default App
