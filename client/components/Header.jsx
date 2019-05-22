import React from 'react';
import Fab from '@material-ui/core/Fab';
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
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
});

function Header(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container spacing={8}>
        <Grid item xs={10}>
          <h1 className="header__title my-4"><i className="fas fa-hat-wizard"></i>Wicked Sales</h1>
        </Grid>
        <Grid item xs={2}>
          <Fab variant="extended" aria-label="Add" className={classes.fab}>
            {props.cart.length} items<i className="fas fa-shopping-cart"></i>
          </Fab>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Header);
