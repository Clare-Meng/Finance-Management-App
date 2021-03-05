import React, { Component } from 'react';

import NavigationBar from './NavigationBar';
import AddSpending from './AddSpending';

class App extends Component {
  render() {
    return (
      <>
        <NavigationBar />
        <AddSpending />
      </>
    );
  }
}

export default App;
