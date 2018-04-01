import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import RouterWrapper from './components/RouterWrapper'

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RouterWrapper />
      </Provider>
    );
  }
}

export default App;
