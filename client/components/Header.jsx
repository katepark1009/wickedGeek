import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  },
  root: {
    flexGrow: 1
  },
  button: {
    padding: theme.spacing.unit * 1.5,
    margin: theme.spacing.unit * 2
  }
});

function Header(props) {
  const { classes } = props;
  return (
    <div>
      <div className={classes.root}>
        <Grid container spacing={8}>
          <Grid item md={10} sm={9}>
            <h1 className="header__title my-4"><i className="fas fa-hat-wizard"></i>Wicked Sales</h1>
          </Grid>
          <Grid item md={2} sm={3} alignItems="flex-end">
            <Button onClick={() => props.click('cart', {})} variant="outlined" className={classes.button} >
              {props.cart.length} items<i className="fas fa-shopping-cart"></i>
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default withStyles(styles)(Header);
