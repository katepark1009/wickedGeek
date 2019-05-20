import React from 'react';

export default function ProductListItem(props) {
  return (
    <div className = "product__container card" style="width: 18rem;">
      <img src="" className="product__image card-img-top" alt="" />
      <div className="product__detail card-body">
        <p className="product__name card-title">Product name</p>
        <p className="product__price card-text">0</p>
        <p className="product__description card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet aut, deserunt assumenda soluta possimus nisi autem, fuga accusantium pariatur minus laborum reiciendis consequatur vitae aperiam, saepe aliquam distinctio inventore ab?</p>
      </div>
    </div>
  );
}
