import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class AppDrawerMaterialUi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      side: false
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }
  sideList() {
    return (
      <div role="presentation"
        onClick={e => { this.toggleDrawer(false); }}
        onKeyDown={e => { this.toggleDrawer(false); }}>
        <List>
          <ListItem button key={'menu'} divider={true}>
            <ListItemText primary={'Menu'} />
          </ListItem>
          <ListItem button key={'catalog'} divider={true}>
            <ListItemText primary={'Catalog'} onClick={ e => { this.props.click('catalog', {}); }}/>
          </ListItem>
          <ListItem button key={'cart'} divider={true}>
            <ListItemText primary={'Cart'} onClick={ e => { this.props.click('cart', {}); }}/>
          </ListItem>
          <ListItem button key={'checkout'} divider={true}>
            <ListItemText primary={'Check out'} onClick={ e => { this.props.click('checkout', {}); }} />
          </ListItem>
        </List>
      </div>
    );
  }
  toggleDrawer(open) {
    this.setState({ side: open });
  }
  render() {
    return (
      <div>
        <div className="bar fas fa-bars" onClick={ e => { this.toggleDrawer(true); } }></div>
        <Drawer open={this.state.side} onClose={ e => { this.toggleDrawer(true); } }>
          {this.sideList()}
        </Drawer>
      </div>
    );
  }
}

export default AppDrawerMaterialUi;
