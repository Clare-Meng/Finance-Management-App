import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import NavigationBar from './components/NavigationBar';
import AddSpending from './components/AddSpending';
import SpendingEntry from './components/SpendingEntry';

class App extends Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <div className="App">
            <NavigationBar />
            <AddSpending />
            <SpendingEntry />
          </div>
        </Provider>
      </>
    );
  }
}

export default App;
