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
  const cards = props.products.map(product => {
    return <ProductListItem key={product.id}
      id = {product.id}
      name = {product.name}
      price = {product.price}
      image = {product.image}
      description = {product.shortDescription}
      setView ={props.setView}
      addToCart = {props.cart}
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
