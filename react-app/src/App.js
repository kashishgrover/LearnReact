import React from 'react';

//Stateless component
// const App = () => <h1>Hello, Stateless Component</h1>


// Class component can have state, but stateless component cannot
class App extends React.Component{
  render() {
    return (
      <div>
        {/*This is how you comment inside JSX*/}
        {/*Return cannot return consecutive tags because it is like
          returning two consecutive functions which won't translate well.
          Instead, one is supposed to wrap consecutive tags within a wrapper
          tag like <div>*/}
        <h1>Hello World, this is a test</h1>
        <article>This here is some sample article text.</article>
      </div>
    )
  }
}

export default App
