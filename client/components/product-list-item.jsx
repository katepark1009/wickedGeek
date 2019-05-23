import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    spacing: 8,
    margin: theme.spacing.unit * 2
  },
  paper: {
    padding: theme.spacing.unit * 2,
    height: '100%',
    color: theme.palette.text.secondary
  }
});

function ProductListItem(props) {
  const { classes } = props;
  return (
    <div m={4} className={classes.root} >
    <Grid className={classes.paper} container direction="row" justify="space-around" spacing={16}>
    <Grid item xs className = "product__container shadow card bg-light " onClick={() => props.setView('detail', props.id)}>
      <div className="product__image__container card-header">
        <img src={props.image} className="product__image card-img-top" alt={props.name} />
      </div>
      <div className="product__detail card-body">
        <h3 className="product__name card-title">{props.name}</h3>
        <h5 className="product__price card-subtitle text-muted">{'$ ' + (props.price / 100).toFixed(2) }</h5>
        <p className="product__description card-text">{props.description}</p>
        <div className="product__btn btn btn-outline-info"><i className="far fa-plus-square"></i> More Detail</div>
      </div>
    </Grid>
    </Grid>
    </div>
  );
}

export default withStyles(styles)(ProductListItem);
