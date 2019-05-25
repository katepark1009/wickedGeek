import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const styles = theme => ({
  root: {
    spacing: 8,
    margin: theme.spacing.unit * 2,
    maxWidth: 345,
    height: 470
  },
  paper: {
    padding: theme.spacing.unit * 2,
    height: '100%',
    color: theme.palette.text.secondary
  },
  card: {
    maxWidth: 345,
    height: 470
  },
  button: {
    marginLeft: 5
  },
  content: {
    height: 220
  }
});

class ProductListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    console.log(e);
    // let productId = e.currentTarget.parentNode.parentNode.getAttribute('dataid');
    // console.log(productId);
    // fetch(`/api/products.php?id=${productId}`, {
    //   method: 'GET'
    // })
    //   .then(response => response.json())
    //   .then(json => this.props.addToCart(json));
  }
  render() {
    const { classes } = this.props;
    return (
      <div m={4} className={classes.root} >
        <Grid className={classes.paper} container direction="row" justify="space-around" spacing={16}>
          <Grid item xs className = "product__container shadow bg-light " onClick={() => this.props.setView('detail', this.props.id)}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia component="img" image={this.props.image} height="200" alt={this.props.name} />
                <CardContent className={classes.content}>
                  <h3 className="product__name card-title">{this.props.name}</h3>
                  <h5 className="product__price card-subtitle text-muted">{'$ ' + (this.props.price / 100).toFixed(2) }</h5>
                  <p className="product__description card-text">{this.props.description}</p>
                </CardContent>
              </CardActionArea>
              <IconButton aria-label="Add to favorites" className={`${classes.button} ${this.props.name}`} onClick={this.handleClick} dataid={this.props.id}>
                <AddShoppingCartIcon color="primary" dataid={this.props.id}/>
              </IconButton>
              <Button size="medium" color="primary">More Detail</Button>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(ProductListItem);
