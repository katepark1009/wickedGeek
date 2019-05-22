import React from 'react';

export default function Header(props) {
  return (
    <React.Fragment>
      <div className="header__container row mb-3 py-2">
        <div className="header__title col-sm-8 col-lg-9 pt-3 pb-2 text-left pl-5"><h1><i className="fas fa-hat-wizard"></i>Wicked Sales</h1></div>
        <div className="header__cartItem col-sm-3 col-lg-2" onClick={() => props.click('cart', {})}><p className="btn btn-outline-light text-center">{props.cart.length} items<i className="fas fa-shopping-cart"></i></p></div>
      </div>
    </React.Fragment>
  );
}
