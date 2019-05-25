import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import CreditCard from '@material-ui/icons/CreditCard';
import LocalShipping from '@material-ui/icons/LocalShipping';
import LocationCity from '@material-ui/icons/LocationCity';
import MarkunreadMailbox from '@material-ui/icons/MarkunreadMailbox';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit * 2
  },
  padding: {
    padding: theme.spacing.unit
  },
  spacing: 8,
  button: {
    margin: theme.spacing.unit,
    right: 20
  }
});
class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipcode: '',
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
    let address = `${this.state.address1} ${this.state.address2} ${this.state.city} ${this.state.state} ${this.state.zipcode}`;
    let order = { name: this.state.name,
      creditCard: this.state.creditCard,
      shippingAddress: address };
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
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Grid container justify="center">
          <Grid container justify="center">
            <h2 className={ `${classes.margin} checkout__title`}>Checkout</h2>
          </Grid>
          <Grid container justify="center">
            <h3 className={ `${classes.margin} checkout__price`}>Order Total: $  {this.state.sum}</h3>
          </Grid>
        </Grid>

        <Grid justify="center" mx="auto" container spacing={16}>
          <form onSubmit={this.handleSubmit} >

            <Grid container className={classes.margin} >
              <Grid item>
                <AccountCircle />
              </Grid>
              <Grid item>
                <TextField fullWidth required id="input-with-icon-grid" label="Name" name="name" onChange={this.handleChange} />
              </Grid>
            </Grid>

            <Grid container className={classes.margin}>
              <Grid item>
                <CreditCard />
              </Grid>
              <Grid item xs={7}>
                <TextField fullWidth required id="input-with-icon-grid" label=" Card number(16 digits)" name="creditCard" onChange={this.handleChange} />
              </Grid>
            </Grid>

            <Grid container className={classes.margin}>
              <Grid item>
                <LocalShipping />
              </Grid>
              <Grid item xs={5}>
                <TextField pl={3} ml={4} required id="input-with-icon-grid" label=" Address 1" name="address1" onChange={this.handleChange} />
              </Grid>
              <Grid item xs={5}>
                <TextField pl={3} ml={4} required id="input-with-icon-grid" label="   Address 2" name="address2" onChange={this.handleChange} />
              </Grid>
            </Grid>

            <Grid container className={classes.margin}>
              <Grid item>
                <LocationCity />
              </Grid>
              <Grid item xs={5}>
                <TextField pl={3} ml={4} required id="input-with-icon-grid" label=" City" name="city" onChange={this.handleChange} />
              </Grid>
              <Grid item xs={5}>
                <TextField pl={3} ml={4} required id="input-with-icon-grid" label=" State" name="state" onChange={this.handleChange} />
              </Grid>
            </Grid>

            <Grid container className={classes.margin}>
              <Grid item>
                <MarkunreadMailbox />
              </Grid>
              <Grid item xs={5}>
                <TextField pl={3} ml={4} required id="input-with-icon-grid" label=" Zipcode" name="zipcode" onChange={this.handleChange} />
              </Grid>
            </Grid>

            <Grid className={classes.margin} container justify="center" alignItems="center">
              <Button justify="center" variant="contained" size="large" className={classes.button} onClick={() => this.props.setView('catalog', {})}><p><i className="far fa-arrow-alt-circle-left"></i> Continue Shopping</p></Button>
              <Button justify="center" variant="contained" size="large" color="primary" className={classes.button} onClick={this.handleSubmit}><p><i className="fas fa-shopping-cart"></i> Place your order</p></Button>
            </Grid>

          </form>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(CheckoutForm);
