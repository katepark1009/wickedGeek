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
      products: [],
      cart: []
    };
    this.setView = this.setView.bind(this);
    this.getCartItem = this.getCartItem.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }
  getCartItem() {
    fetch('/api/cart.php', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(json => this.setState({ cart: json }));
  }
  addToCart(product) {
    let cart = [ ...this.state.cart ];
    cart = cart.concat(product);
    fetch('/api/cart.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cart)
    })
      .then(response => response.json())
      .then(json => this.setState({ cart: json }));
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
    this.getCartItem();
  }
  render() {
    return (
      <React.Fragment>
        <Header cartItem={this.getCartItem} cart={this.state.cart}/>
        {this.state.view.name === 'catalog'
          ? <ProductList view={this.state.view} setView={this.setView} products={this.state.products}/>
          : <ProductDetails view={this.state.view} setView={this.setView} id={this.state.view.params.id} cart={this.addToCart} />}
      </React.Fragment>
    );
  }
}
