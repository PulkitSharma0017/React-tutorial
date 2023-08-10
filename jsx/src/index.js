// 1) Import React and ReactDOM libraries

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 2) Get a reference to the div with ID root

const el = document.getElementById('root');

// 3) Tell React to take control of that div

const root = ReactDOM.createRoot(el);

// 4) Show the Component on the screen

root.render(<App />);