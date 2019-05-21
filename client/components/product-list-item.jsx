import React from 'react';

export default function ProductListItem(props) {
  return (
    <div className = "product__container shadow card bg-light col-md-3 ml-4 mr-4 mb-5" onClick={() => props.setView('detail', props.id)}>
      <div className="product__image__container card-header">
        <img src={props.image} className="product__image card-img-top" alt={props.name} />
      </div>
      <div className="product__detail card-body">
        <h3 className="product__name card-title">{props.name}</h3>
        <h5 className="product__price card-subtitle text-muted">{'$ ' + (props.price / 100).toFixed(2) }</h5>
        <p className="product__description card-text">{props.description}</p>
        <div className="btn btn-outline-info"><i className="far fa-plus-square"></i> More Detail</div>
      </div>
    </div>
  );
}
