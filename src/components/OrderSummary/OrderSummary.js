import React from 'react';
import { List, ListItem } from 'material-ui/List';

const OrderSummary = (props) => {
  return (
    <List>
      <ListItem primaryText="Salad" rightIcon={<div>5</div>} />
    </List>
  );
}

export default OrderSummary;