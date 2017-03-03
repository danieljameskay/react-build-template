import React from 'react'
import ReactDom from 'react-dom'
import Hello from '../src/components/hello'

const App = () => {
    return(
      <div>Hello!</div>
    );
};

ReactDom.render(<App />, document.getElementById('app'));
