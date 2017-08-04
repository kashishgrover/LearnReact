import React from 'react'
import ReactDOM from 'react-dom'

// Managing react component state with Lifecycle methods

//When a component is added to our Virtual DOM,
//it is called 'Mounting', and when it is removed,
//it is called 'Unmounting'

class App extends React.Component{
    constructor() {
      console.log("In Constructor")
      super();
      this.state = {
        val: 0
      }
      this.update = this.update.bind(this)
    }

    update() {
      console.log("In Update")
      this.setState({val: this.state.val + 1})
    }

    componentWillMount() {
      console.log("componentWillMount");
      //In componentWillMount, we have access to our state and our prompts,
      //but we do not have access to the DOM representation of our component
      //yet because it has not been placed into the DOM
      this.setState({m: 2});
    }

    render() {
      console.log("In Render")
      return (
        <div>
          <center>
            <h3>Well, hello there</h3>
            <button onClick={this.update}>{this.state.val}</button>
            <br /><br />
            {this.state.val * this.state.m}
          </center>
        </div>
      )
    }

    componentDidMount() {
      console.log("componentDidMount");
      //In component didMount, we have access to our component in the DOM.
      //We could log out, reactDOM.findDOMNode, and we could just pass at this.
      console.log(ReactDOM.findDOMNode(this));
      this.inc = setInterval(this.update, 500);
    }

    componentWillUnmount() {
      console.log("componentWillUnmount");
      clearInterval(this.inc);
    }
}

class Wrapper extends React.Component {
  mount() {
    ReactDOM.render(<App />, document.getElementById('a'))
  }

  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('a'))
  }

  render() {
    return (
      <center>
        <button onClick={this.mount.bind(this)}>Mount</button>
        <button onClick={this.unmount.bind(this)}>Unmount</button>
        <div id="a"></div>
      </center>
    )
  }
}

export default Wrapper
