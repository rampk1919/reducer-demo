import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MainComponent from './MainComponent';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';

// import createStore
import {createStore} from 'redux';
// import Provider
import {Provider} from 'react-redux'
// import reducer
import rootReducer from './reducers/reducer'

const initialState = {
  products:[],
  count:-1,
}

// create a store using the reducer
// also add a window object that will simulate the redux in browser (only in dev.)
let store = createStore(rootReducer, initialState,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());


ReactDOM.render(
<Provider store={store}>
  <MainComponent/>
</Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
