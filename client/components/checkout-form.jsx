import React from 'react';

export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: '',
      shippingAddress: '',
      sum: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    let order = { name: this.state.name,
      creditCard: this.state.creditCard,
      shippingAddress: this.state.shippingAddress };
    this.props.placeOrder(order);
  }
  componentDidMount() {
    if (this.props.cart.length > 0) {
      let sum = this.props.cart.reduce((a, b) => ({ price: parseInt(a.price) + parseInt(b.price) }));
      sum = sum.price / 100;
      this.setState({ sum });
    }
  }
  render() {
    return (
      <div className="checkout__container">
        <div className="checkout__input__container">
          <div className="checkout__title__container col-10 offset-1">
            <h2 className="chekout__title">Checkout</h2>
            <h5 className="checkout__price text-muted">Order Total: ${this.state.sum}</h5>
          </div>
          <form className="checkout__input input-group col-sm-10 offset-1" onSubmit={this.handleSubmit}>
            <label className="checkout__input__label col-sm-11">
              <p>Name *</p>
              <input id="cc-name" type="text" className="form-control" placeholder=" Name" value={this.state.name} name="name" required onChange={this.handleChange} />
            </label>
            <label className="checkout__input__label col-sm-11">
              <p>CreditCard *</p>
              <input id="cc-number" name="creditCard" type="tel" className="form-control cc-number identified" placeholder=" Credit card number(16 digits)" value={this.state.creditCard} required="" pattern="[0-9]{16}" onChange={this.handleChange}/>
            </label>
            <label className="checkout__input__label col-sm-11">
              <p>Shipping Address *</p>
              <textarea type="text" className="form-control" placeholder=" Address" value={this.state.shippingAddress} required name="shippingAddress" onChange={this.handleChange}/>
            </label>
            <div className ="offset-1">
              <div className="back btn btn-outline-secondary ml-3 col-sm-5 mr-3" onClick={() => this.props.setView('catalog', {})}><i className="far fa-arrow-alt-circle-left"></i> Continue Shopping</div>
              <button type="submit" className="btn btn-outline-info text-center col-sm-5" onClick={this.handleSubmit}><i className="fas fa-shopping-cart"></i> Place your order</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
