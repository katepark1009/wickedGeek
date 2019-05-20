import React from 'react';

export default function ProductListItem(props) {
  return (
    <div className = "product__container card" style="width: 18rem;">
      <img src={props.image} className="product__image card-img-top" alt={props.name} />
      <div className="product__detail card-body">
        <p className="product__name card-title">{props.name}</p>
        <p className="product__price card-text">{props.price}</p>
        <p className="product__description card-text">{props.description}</p>
      </div>
    </div>
  );
}
