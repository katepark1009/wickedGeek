import React from 'react';
// import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AppDrawerMaterialUi from './app-drawer';

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
  function handleClick() {
    props.click('cart', {});
  }
  const { classes } = props;
  return (
    <Grid container m={0} p={0} className="header__container" style={{ margin: 0 }}>
      <Grid item md={12} sm={12}>
        <AppDrawerMaterialUi click={props.click}/>
        <h2 className="header__title my-4" onClick={() => props.click('catalog', {})}><i className="fas fa-hat-wizard"></i>Wicked Geek</h2>
        <Fab color="secondary" onClick={handleClick} variant="extended" className={`${classes.extendedIcon} cart__btn`} style={buttonStyle}>
          {props.cart.length} items<i className="fas fa-shopping-cart"></i>
        </Fab>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(Header);
