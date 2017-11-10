import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

const SideMenu = (props) => {

  return (
    <Drawer
      open={props.open}
      onRequestChange={props.closed}
      docked={false}>
      <MenuItem>Menu</MenuItem>
      <MenuItem>Burger</MenuItem>
    </Drawer>
  );
}

export default SideMenu;