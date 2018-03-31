import React, { Component } from 'react';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import configureStore from './store/configureStore';
import DummyComponent from './components/DummyComponent'
import './App.css';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <DummyComponent />
      </Provider>
    );
  }
}

export default App;
