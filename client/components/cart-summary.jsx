import React from 'react';
import CartSummaryItem from './cart-summary-item';

export default function CartSummary(props) {
  let sum = props.cart.reduce((a, b) => ({ price: a.price + b.price }));
  let cartItems = props.cart.map(item => {
    return <CartSummaryItem id={item.id}
      key = {item.id}
      name = {item.name}
      price = {item.price}
      image = {item.image}
      description = {item.shortDescription}
    />;
  });
  sum = sum.price / 100;
  return (
    <div className="cartsummarty__container mb-3">
      <div className="back btn btn-outline-secondary ml-3" onClick={() => props.setView('catalog', {})}><i className="far fa-arrow-alt-circle-left"></i> Back to catalog</div>
      <div className="cartsummarty__title mt-4 pl-8"><h3 className="offset-sm-1">My Cart</h3></div>
      <div className="cartsummarty__detail">
        {cartItems}
      </div>
      <div className="cartsummarty__total mt-4 pl-8"><h4 className="offset-sm-1">Item Total : {sum.toFixed(2)}</h4></div>
    </div>
  );
}
