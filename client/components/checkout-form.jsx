import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import CreditCard from '@material-ui/icons/CreditCard';
import LocalShipping from '@material-ui/icons/LocalShipping';

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
    let address = `${ this.state.address1 } ${this.state.address2} ${this.state.city} ${this.state.state} ${this.state.zipcode}`;
    let order = { name: this.state.name,
      creditCard: this.state.creditCard,
      shippingAddress: address };
      console.log(order);
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
      <div className="checkout__title__container" >
        <Grid container justify="center" spacing={8} >
          <h2 className={ `${classes.margin} checkout__title`}>Checkout</h2>
        </Grid>
        <Grid container justify="center" spacing={8}>  
          <h5 className={ `${classes.margin} checkout__price text-muted`}>Order Total: ${this.state.sum}</h5>
        </Grid>

        <div mx="auto">
          <Grid justify="center" container spacing={8} >
            <form xs={9} onSubmit={this.handleSubmit} className="checkout__container">
              <div className={classes.margin} >
                <Grid container spacing={8} alignItems="center">
                  <Grid item>
                    <AccountCircle mt={3}/>
                  </Grid>
                  <Grid item>
                    <TextField fullWidth required id="input-with-icon-grid" label="Name" name="name" onChange={this.handleChange} />
                  </Grid>
                </Grid>
              </div>
              <div className={classes.margin}>
                <Grid container spacing={8} alignItems="center">
                  <Grid item>
                    <CreditCard />
                  </Grid>
                  <Grid item xs={7}>
                    <TextField fullWidth required margin="normal" id="input-with-icon-grid" label=" Card number(16 digits)" name="creditCard" onChange={this.handleChange} />
                  </Grid>
                </Grid>
              </div>
              <div className={classes.margin} >
                <Grid container spacing={8} alignItems="center">
                  <Grid item>
                    <LocalShipping />
                  </Grid>
                  <Grid item xs={10}>
                    <TextField fullWidth required margin="normal" id="input-with-icon-grid" label=" Address 1" name="address1" onChange={this.handleChange} />
                  </Grid>
                  <Grid pl={3} ml={4} item xs={5} className={classes.margin}>
                    <TextField fullWidth pl={3} ml={4} required margin="normal" id="input-with-icon-grid" label=" Address 2" name="address2" onChange={this.handleChange} />
                  </Grid>
                  <Grid pl={3} ml={4} item xs={5}>
                    <TextField fullWidth pl={3} ml={4} required margin="normal" id="input-with-icon-grid" label=" City" name="city" onChange={this.handleChange} />
                  </Grid>
                  <Grid pl={3} ml={4} item xs={5} className={classes.margin}>
                    <TextField fullWidth pl={3} ml={4} required margin="normal" id="input-with-icon-grid" label=" State" name="state" onChange={this.handleChange} />
                  </Grid>
                  <Grid pl={3} ml={4} item xs={5}>
                    <TextField fullWidth pl={3} ml={4} required margin="normal" id="input-with-icon-grid" label=" Zipcode" name="zipcode" onChange={this.handleChange} />
                  </Grid>
                </Grid>
                </div>
                <Grid className={classes.margin} container justify="center" alignItems="center">
                  <Button justify="center" variant="contained" size="large" className={classes.button} onClick={() => this.props.setView('catalog', {})}><p><i className="far fa-arrow-alt-circle-left"></i> Continue Shopping</p></Button>
                  <Button justify="center" variant="contained" size="large" color="primary" className={classes.button} onClick={this.handleSubmit}><p><i className="fas fa-shopping-cart"></i> Place your order</p></Button>
                </Grid>
            </form>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(CheckoutForm);
