import React from 'react';

export default function ProductListItem(props) {
  return (
    <div className = "product__container card bg-light col-md-3 ml-4 mr-4 mb-5">
      <div className="product__image__container card-header">
        <img src={props.image} className="product__image card-img-top" alt={props.name} />
      </div>
      <div className="product__detail card-body">
        <h3 className="product__name card-title">{props.name}</h3>
        <p className="product__price card-subtitle">{'$ ' + props.price}</p>
        <p className="product__description card-text">{props.description}</p>
      </div>
    </div>
  );
}
