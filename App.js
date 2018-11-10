import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CatalogPage from './src/CatalogPage';
import products from './constants/products';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { products };
  }

  render() {
    const { products } = this.state;

    return (
      <div>
        <CatalogPage products={products} />
      </div>
    );
  }
}

export default App;
