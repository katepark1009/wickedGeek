import React from 'react';
import ProductListItem from './product-list-item';

export default function ProductList(props) {
  const cards = props.products.map(product => {
    return <ProductListItem key={product.id}
      id = {product.id}
      name = {product.name}
      price = {product.price}
      image = {product.image}
      description = {product.shortDescription} onClick={props.products? props.setView('details', { id: props.id }) : console.log("???"); } />;
  });
  return (
    <div className= "productList__container row">
      {cards}
    </div>
  );
}
