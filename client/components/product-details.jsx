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
    return (
      <div className="product__detail__container mt-3">
        <div className="back btn btn-outline-secondary ml-3" onClick={() => this.props.setView('catalog', {})}><i className="far fa-arrow-alt-circle-left"></i> Back to catalog</div>
        <div className="product__detail__card row mt-3 px-3">
          <div className="product__detail__image__container col-sm-6">
            <img className="product__detail__image" src={this.state.product ? this.state.product.image : ''} alt={this.state.product ? this.state.product.name : ''}/>
          </div>
          <div className="product__detail__info col-sm-5 py-5">
            <div className="product__detail__title"><h2>{this.state.product ? this.state.product.name : ''}</h2></div>
            <div className="product__detail__price text-muted"><h4>{this.state.product ? '$ ' + (this.state.product.price / 100).toFixed(2) : ''}</h4></div>
            <div className="product__detail__description"><h5>{this.state.product ? this.state.product.shortDescription : ''}</h5></div>
            <div className="btn btn-warning"><i className="far fa-plus-square" onClick={() => this.props.cart(this.state.product)}></i> Add to Cart</div>
          </div>
        </div>
        <div className="product__detail__all__info card bg-light mx-3 mt-3 px-3 py-3"><i className="fas fa-search-plus"></i>{this.state.product ? this.state.product.longDescription : ''}</div>
      </div>
    );
  }
}
