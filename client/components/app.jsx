import React from 'react';
import Header from './Header';
import ProductList from './product-list';
import ProductDetails from './product-details';

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
    this.setView = this.setView.bind(this);
  }
  setView(name, params) {
    let view = { ...this.state.view };
    view.name = name;
    view.params = {
      id: params
    };
    this.setState({ view });

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
        {this.state.view.name === 'catalog'
          ? <ProductList view={this.state.view} setView={this.setView} products={this.state.products}/>
          : <ProductDetails view={this.state.view} setView={this.setView} id={this.state.view.params.id}/>}
      </React.Fragment>
    );
  }
}
