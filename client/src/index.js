import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Provider - allows to check store from anywhere inside the app (from parent to children )
import { Provider } from 'react-redux';

// applyMiddleware inform store about our own middleware and help impleented its into our redux
//compose help to put all middleware what we are own
import { 
  createStore, 
  applyMiddleware, 
  // compose 
} 
  from 'redux';
// middleware to use easier asynchronous events to API
import thunk from 'redux-thunk';
// its the same like COMPOSE but also give possibility to check redux in browser
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducer/index';

// create store with all data
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
// const store = createStore(reducers, compose(applyMiddleware(thunk)))

// new React 18 option to take ReactDOM
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );

reportWebVitals();
