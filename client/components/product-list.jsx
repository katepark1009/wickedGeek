import React from 'react';
import ProductListItem from './product-list-item';

export default function ProductList(props) {
  const cards = this.props.products.map(product => {
    return <ProductListItem key={product.id}
      id = {product.id}
      name = {product.price}
      image = {product.image}
      description = {product.shortDescription} />;
  });
  return (
    <div className= "productList__container">
      {cards}
    </div>
  );
}
