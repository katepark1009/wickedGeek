import React from 'react';
import Header from './Header';
import ProductList from './product-list';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'catalog',
        params: {}
      },
      products: []
    };
  }
  setView(name, params) {
    if (this.state.products) {
      let view = { ...this.state.view };
      view.name = name;
      view.params = params;
      this.setState({ view }, () => {console.log('working');});
    }
  }
  getProducts() {
    fetch('/api/products.php', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(json => this.setState({ products: json }));
  }
  componentDidMount() {
    this.getProducts();
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        {this.state.products ? <ProductList setView={this.setView} products={this.state.products}/> : 'loading' }
      </React.Fragment>
    );
  }
}
