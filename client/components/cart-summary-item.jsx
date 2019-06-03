import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const style = {
  card: {
    display: 'flex',
    padding: 5,
    margin: 20,
    spacing: 16,
    height: 160
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flex: '1 0 auto'
  },
  cover: {
    width: 151
  },
  media: {
    width: 200
  }
};

function CartSummaryItem(props) {
  return (
    <Card style={style.card}>
      <CardMedia style={style.media} image={props.image[2]} alt={props.name} title={props.name}/>
      <div className={style.details}>
        <CardContent style={style.content}>
          <h3 className="cart__summary__name card-title">{props.name}</h3>
          <h5 className="cart__summary__price card-subtitle text-muted">{'$ ' + (parseInt(props.price) / 100).toFixed(2) }</h5>
          <p className="cart__summary__description card-text">{props.description}</p>
        </CardContent>
      </div>
    </Card>
  );
}

export default CartSummaryItem;
