import React from 'react';
import Header from './Header';
import ProductList from './product-list';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
  getProducts() {
    fetch('/api/products.php', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(json => console.log('json :', this.state.products))
      .catch(error => console.log('error: ', error));
  }
  componentDidMount() {
    this.getProducts();
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <ProductList products={this.state.products}/>
      </React.Fragment>
    );
  }
}
