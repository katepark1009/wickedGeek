import React from 'react';
import Header from './Header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cart-summary';
import CheckoutForm from './checkout-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'catalog',
        params: {}
      },
      products: [],
      cart: [],
      sum: 0,
      openSnackBar: false,
      openDrawer: false
    };
    this.setView = this.setView.bind(this);
    this.getCartItem = this.getCartItem.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }
  placeOrder(order) {
    let cart = [ ...this.state.cart ];
    let cartItemNum = cart.length;
    if (cartItemNum > 0) {
      fetch('/api/orders.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
      })
        .then(response => response.json());
      this.setState({ view: { name: 'catalog', params: {} } });
      this.setState({ cart: [] });
    }
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
    this.setState({ openSnackBar: true });
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
  closeSnackbar() {
    this.setState({ openSnackBar: false });
  }
  toggleDrawer(open) {
    this.setState({ openDrawer: open });
  }
  render() {
    let render = null;
    if (this.state.view === [] || this.state.view.name === 'catalog') {
      render = <ProductList view={this.state.view} setView={this.setView} products={this.state.products} cart={this.addToCart} />;
    } else if (this.state.view.name === 'detail') {
      render = <ProductDetails view={this.state.view} setView={this.setView} id={this.state.view.params.id} cart={this.addToCart} open={this.state.openSnackBar} close={this.closeSnackbar}/>;
    } else if (this.state.view.name === 'cart') {
      render = <CartSummary cart={this.state.cart} setView={this.setView} close={this.closeSnackbar}/>;
    } else if (this.state.view.name === 'checkout') {
      render = <CheckoutForm cart={this.state.cart} setView={this.setView} placeOrder={this.placeOrder} total={this.state.sum} />;
    }
    return (
      <React.Fragment>
        <Header openDrawer={this.state.openDrawer} cartItem={this.getCartItem} cart={this.state.cart} click={this.setView} toggleDrawer={this.toggleDrawer}/>
        {render}
      </React.Fragment>
    );
  }
}
