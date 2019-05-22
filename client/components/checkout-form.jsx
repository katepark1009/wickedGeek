import React from 'react';

export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  render() {
    return (
      <div className="checkout__container">
        <div className="checkout__input__container">
          <div className="checkout__title__container">
            <h2 className="chekout__title">Checkout</h2>
            <p className="checkout__price">Order Total: ${}</p>
          </div>
          <form className="checkout__input" onSubmit={this.handleSubmit}>
            <label>
              <p>Name</p>
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <label>
              <p>CreditCard</p>
              <input type="text" value="" onSubmit={this.handleSubmit}/>
            </label>
            <label>
              <p>Shipping Address</p>
              <textarea type="text" value="" onSubmit={this.handleSubmit}/>
            </label>
            <div className="col-sm-3 col-lg-2" onClick={() => this.props.click('cart', {})}><p className="text-muted">Continue Shopping</p></div>
            <button type="submit" className="col-sm-3 col-lg-2" onClick={() => this.props.click('cart', {})}><p className="btn btn-outline-light text-center"><i className="fas fa-shopping-cart"></i>Place Order</p></button>
          </form>
        </div>
      </div>
    );
  }
}
