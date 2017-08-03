import React from 'react'; //Library that allows building of react components
import ReactDOM from 'react-dom'; //Allows components to work in context of the DOM

import App from './App';

ReactDOM.render(<App cat={6} />, document.getElementById('root'));
