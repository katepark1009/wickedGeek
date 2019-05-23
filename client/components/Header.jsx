import React from 'react';
// import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing.unit
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  }
});

function Header(props) {
  const buttonStyle = {
    margin: 0,
    top: 'auto',
    right: 50,
    bottom: 60,
    left: 'auto',
    position: 'fixed'
  };
  const rootStyle = {
    width: '100vw'
  };
  const { classes } = props;
  return (
    <div>
      <div className={classes.root} style={rootStyle}>
        <Grid container m={0} className="header__container">
          <Grid item md={12} sm={12}>
            <h1 className="header__title my-4"><i className="fas fa-hat-wizard"></i>Wicked Sales</h1>
            <Fab color="secondary" onClick={() => props.click('cart', {})} variant="extended" className={`${classes.extendedIcon} cart__btn`} style={buttonStyle}>
              {props.cart.length} items<i className="fas fa-shopping-cart"></i>
            </Fab>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default withStyles(styles)(Header);
