import React from 'react';

export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: '',
      shippingAddress: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    let object = { name: 'catalog', params: {} };
    this.props.placeOrder(object, this.state.name, this.state.creditCard, this.state.shippingAddress);
  }
  render() {
    return (
      <div className="checkout__container">
        <div className="checkout__input__container">
          <div className="checkout__title__container">
            <h2 className="chekout__title">Checkout</h2>
            <p className="checkout__price">Order Total: ${}</p>
          </div>
          <form className="checkout__input input-group col-sm-10 offset-1" onSubmit={this.handleSubmit}>
            <label className="checkout__input__label col-sm-11">
              <p>Name</p>
              <input id="cc-name" type="text" className="form-control" placeholder=" Name" value={this.state.name} name="name" required onChange={this.handleChange} />
            </label>
            <label className="checkout__input__label col-sm-11">
              <p>CreditCard</p>
              <input id="cc-number" name="creditCard" type="tel" className="form-control cc-number identified visa" placeholder=" Credit card number(16 digits)" value={this.state.creditCard} required="" pattern="[0-9]{16}" onChange={this.handleChange}/>
            </label>
            <label className="checkout__input__label col-sm-11">
              <p>Shipping Address</p>
              <textarea type="text" className="form-control" placeholder=" Address" value={this.state.shippingAddress} required name="shippingAddress" onChange={this.handleChange}/>
            </label>
            <div className ="row">
              <div className="back btn btn-outline-secondary ml-3 col-sm-5 mr-3" onClick={() => this.props.setView('catalog', {})}><i className="far fa-arrow-alt-circle-left"></i> Continue Shopping</div>
              <button type="submit" className="btn btn-outline-info text-center col-sm-5" onClick={this.handleSubmit}><i className="fas fa-shopping-cart"></i>Place Order</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
