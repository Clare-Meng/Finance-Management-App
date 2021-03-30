import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import NavigationBar from './components/NavigationBar';
import AddSpending from './components/AddSpending';
import SpendingEntry from './components/SpendingEntry';

import './styling/App.css';

class App extends Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <div className="App">
            <NavigationBar />
            <div className="home-row">
              <div className="home-col">
                <AddSpending />
              </div>
              <div className="home-col">
                <SpendingEntry />
              </div>
            </div>
          </div>
        </Provider>
      </>
    );
  }
}

export default App;
