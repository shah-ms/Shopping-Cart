import React from 'react';
import Items from './Items';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {counters: {'Lays': 0, 'Maggi': 0, 'Kurkure': 0, 'Cheese': 0}, cartItems: 0};

  }

  render() {
    return (
      <Items totalItems={this.state}/>
    );
  }
}

export default App;
