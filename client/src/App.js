import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import NavigationBar from './components/NavigationBar';
import SpendingEntry from './containers/SpendingEntry';
import HomepageJumbotron from './components/HomepageJumbotron';

import './styling/App.css';

class App extends Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <div>
            <NavigationBar />
            <div className="home-row">
              <div className="home-col">
                <HomepageJumbotron />
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
