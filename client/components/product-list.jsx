import React from 'react';
import ProductListItem from './product-list-item';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1
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
      setView ={props.setView} />;
  });
  return (
    <div className= "productList__container row">
      <div className={classes.root}>
        <Grid container justify="center" spacing={24}>
          {cards}
        </Grid>
      </div>
    </div>
  );
}

export default withStyles(styles)(ProductList);
