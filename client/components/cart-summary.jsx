import React from 'react';
import CartSummaryItem from './cart-summary-item';

export default function CartSummary(props) {
  let sum;
  let cartItems;
  if (props.cart.length > 0) {
    sum = props.cart.reduce((a, b) => ({ price: parseInt(a.price) + parseInt(b.price) }));
    sum = sum.price / 100;
    cartItems = props.cart.map(item => {
      return <CartSummaryItem id={item.id}
        key = {item.id}
        name = {item.name}
        price = {parseInt(item.price)}
        image = {item.image}
        description = {item.shortDescription}
      />;
    });
  }
  return (
    <div className="cartsummarty__container mb-3">
      <div className="back btn btn-outline-secondary ml-3" onClick={() => props.setView('catalog', {})}><i className="far fa-arrow-alt-circle-left"></i> Back to catalog</div>
      <div className="cartsummarty__title mt-4 pl-8"><h3 className="offset-sm-1">My Cart</h3></div>
      <div className="cartsummarty__detail">
        {cartItems}
      </div>
      <div className="row">
        <div className="cartsummarty__total mt-4 pl-8 col-8"><h4 className="offset-sm-1">Item Total : {sum ? sum.toFixed(2) : '$0.00'}</h4></div>
        {cartItems ? <div className="btn btn-outline-secondary ml-3 col-2" onClick={() => {props.setView('checkout', {}); props.close(); }}>Checkout</div> //!여기 클릭핸들러...
          : <h3 className="cart__empty text-muted"> Your cart is empty! </h3> }
      </div>
    </div>
  );
}
