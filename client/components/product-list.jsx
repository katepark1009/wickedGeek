import React from 'react';
import ProductListItem from './product-list-item';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    width: '98%',
    margin: 'auto'
  }
});

function ProductList(props) {
  const { classes } = props;
  let cards = [];
  cards = props.products.map(product => {
    return <ProductListItem key={product.id}
      id = {product.id}
      name = {product.name}
      price = {product.price}
      image = {product.images[2]}
      description = {product.shortDescription}
      setView ={props.setView}
      addToCart = {props.cart}
      image_detail = {product.images[0]}
      image_detail2 = {product.images[1]}
    />;
  });
  return (
    <div className= "productList__container">
      <div>
        <Grid container className={classes.root} spacing={24} justify="center">
          {cards}
        </Grid>
      </div>
    </div>
  );
}

export default withStyles(styles)(ProductList);
