import React, { Component} from 'react';  // or the components
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      Hi there
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
