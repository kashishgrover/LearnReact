import React from 'react'
import ReactDOM from 'react-dom'

// Understanding React component Lifecycle methods

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
      console.log("componentWillMount")
    }

    render() {
      console.log("In Render")
      return (
        <div>
          <center>
            <h3>Well, hello there</h3>
            <button onClick={this.update}>{this.state.val}</button>
          </center>
        </div>
      )
    }

    componentDidMount() {
      console.log("componentDidMount")
    }

    componentWillUnmount() {
      console.log("componentWillUnmount")
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
