import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import green from '@material-ui/core/colors/green';
// import ResponsiveDialog from './modal';

const styles = theme => ({
  close: {
    padding: theme.spacing.unit / 2
  },
  info: {
    backgroundColor: theme.palette.primary.dark
  },
  success: {
    backgroundColor: green[600]
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden'
  },
  gridList: {
    width: 100,
    height: 100
  }
});

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
    this.handleClose = this.handleClose(this);
  }
  componentDidMount() {
    const id = this.props.id;
    fetch(`/api/products.php?id=${id}`, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(json => this.setState({ product: json }));
  }
  handleClose(event, reason) {
    if (reason === 'clickaway') {
      // eslint-disable-next-line no-useless-return
      return;
    }
  }
  render() {
    const { classes } = this.props;
    let product;
    if (this.state.product) {
      product = this.state.product;
    }
    return (
      <div className="product__detail__container mt-3">
        <div className="back btn btn-outline-secondary ml-3" onClick={() => { this.props.setView('catalog', {}); this.props.close(); } }><i className="far fa-arrow-alt-circle-left"></i> Back to catalog</div>
        <div className="product__detail__card row mt-3 px-3">
          <div className="product__detail__image__container col-sm-4">
            <img className="product__detail__image card-img-top" src={this.state.product ? product.images[2] : ''} alt={this.state.product ? product.name : ''}/>
            <div className="product__detail__preview__container">
              <img className="product__detail__preview" src={this.state.product ? this.state.product.images[2] : ''} alt={this.state.product ? this.state.product.name : ''} />
              <img className="product__detail__preview" src={this.state.product ? this.state.product.images[1] : ''} alt={this.state.product ? this.state.product.name : ''} />
              <img className="product__detail__preview" src={this.state.product ? this.state.product.images[0] : ''} alt={this.state.product ? this.state.product.name : ''} />
            </div>
          </div>
          <div className="product__detail__info col-sm-8 py-5">
            <div className="product__detail__title"><h2>{this.state.product ? product.name : ''}</h2></div>
            <div className="product__detail__price text-muted"><h4>{this.state.product ? '$ ' + (parseInt(product.price) / 100).toFixed(2) : ''}</h4></div>
            <div className="product__detail__description"><h5>{this.state.product ? product.shortDescription : ''}</h5></div>
            <button className="product__detail__btn btn btn-warning" onClick={() => this.props.cart(product)}><i className="far fa-plus-square"></i> Add to Cart</button>
          </div>
        </div>
        <div className="product__detail__all__info card bg-light mx-3 mt-3 px-3 py-3">{this.state.product ? product.longDescription : ''}</div>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          variant="info"
          open={this.props.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id'
          }}
          message={<span id="message-id">✨ This item was added to your cart ✨</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={() => this.props.close()}>
              <CloseIcon />
            </IconButton>
          ]}
        />
        {/* <ResponsiveDialog /> */}
      </div>
    );
  }
}

export default withStyles(styles)(ProductDetails);
