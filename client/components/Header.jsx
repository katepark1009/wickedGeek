import React from 'react';

export default function Header(props) {
  return (
    <div className="header__container">
      <h1 className="header__title my-4"><i className="fas fa-hat-wizard"></i>Wicked Sales</h1>
      <p className="heaher__cartItem text-right text-wrap">{props.cart.length}items<i className="fas fa-shopping-cart"></i></p>
    </div>
  );
}
