import React from 'react';
import Header from './Header';

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
      .then(json => console.log('json :', json))
      .catch(error => console.log('error: ', error));
  }
  componentDidMount() {
    this.getProducts();
  }
  render() {
    return (
      <Header />
    );
  }
}
