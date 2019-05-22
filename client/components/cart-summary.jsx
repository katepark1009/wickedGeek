import React from 'react';
import CartSummaryItem from './cart-summary-item';

export default function CartSummary(props) {
  let cartItems = props.cart.map(item => {
    return <CartSummaryItem id={props.cart.id}
      key = {props.cart.id}
      name = {props.cart.name}
      price = {props.cart.price}
      image = {props.cart.image}
      description = {props.cart.shortDescription}
    />;
  });
  return (
    <div className="cartsummarty__container">
      <div className="back btn btn-outline-secondary ml-3" onClick={() => props.setView('catalog', {})}><i className="far fa-arrow-alt-circle-left"></i> Back to catalog</div>
      <div className="cartsummarty__title"><p>My Cart</p></div>
      <div className="cartsummarty__detail">
        {cartItems}
      </div>
    </div>
  );
}
