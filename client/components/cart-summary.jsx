import React from 'react';

export default function CartSummaryItem(props) {
  return (
    <div className="cart__summary__container">
      <div className="cart__summary__image__container card-header">
        <img src={props.image} className="cart__summary__image card-img-top" alt={props.name} />
      </div>
      <div className="cart__summary__detail card-body">
        <h3 className="cart__summary__name card-title">{props.name}</h3>
        <h5 className="cart__summary__price card-subtitle text-muted">{'$ ' + (props.price / 100).toFixed(2) }</h5>
        <p className="cart__summary__description card-text">{props.description}</p>
      </div>
    </div>
  );
}
