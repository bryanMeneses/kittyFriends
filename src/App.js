import React, { Component } from 'react';
import './App.css';

// Components
import KittyCardList from './components/KittyCardList/KittyCardList'

class App extends Component {
  render() {
    return (
      <div className="App justify-content-center text-center" >
        <h1 className="display-4 p-5">KittyFriends</h1>
        <hr />
        <KittyCardList />
      </div>
    );
  }
}

export default App;
