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
    fetch(`/api/products?id=${id}`, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(json => this.setState({ products: json }));
  }
  render() {
    return (
      <div className = "product__detail__container">
        <div className="back">Back to catalog</div>
        <div className="product__detail__card">
          <div className="product__detail__image">
            <img src="" alt=""/>
            <div className="product__detail__info">
            1  <div className="product__detail__title"></div>
              <div className="product__detail__price"></div>
              <div className="product__detail__description"></div>
            </div>
          </div>
        </div>
        <div className="product__detail__all__info"></div>
      </div>
    );
  }
}