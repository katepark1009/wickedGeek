import React from 'react';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
  }
  componentDidMount() {
    const id = this.props.id;
    fetch(`/api/products.php?id=${id}`, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(json => this.setState({ product: json }));
  }
  render() {
    let product;
    if (this.state.product) {
      product = this.state.product;
      product = product[0];
    }
    return (
      <div className="product__detail__container mt-3">
        <div className="back btn btn-outline-secondary ml-3" onClick={() => this.props.setView('catalog', {})}><i className="far fa-arrow-alt-circle-left"></i> Back to catalog</div>
        <div className="product__detail__card row mt-3 px-3">
          <div className="product__detail__image__container col-sm-2">
            <img className="product__detail__image card-img-top" src={this.state.product ? product.image : ''} alt={this.state.product ? product.name : ''}/>
          </div>
          <div className="product__detail__info col-sm-8 py-5">
            <div className="product__detail__title"><h2>{this.state.product ? product.name : ''}</h2></div>
            <div className="product__detail__price text-muted"><h4>{this.state.product ? '$ ' + (parseInt(product.price) / 100).toFixed(2) : ''}</h4></div>
            <div className="product__detail__description"><h5>{this.state.product ? product.shortDescription : ''}</h5></div>
            <button className="product__detail__btn btn btn-warning" onClick={() => this.props.cart(product)}><i className="far fa-plus-square"></i> Add to Cart</button>
          </div>
        </div>
        <div className="product__detail__all__info card bg-light mx-3 mt-3 px-3 py-3"><i className="fas fa-search-plus"></i>{this.state.product ? product.longDescription : ''}</div>
      </div>
    );
  }
}
