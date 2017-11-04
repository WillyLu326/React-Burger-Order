import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Badge from 'material-ui/Badge';

const OrderSummary = (props) => {
  const listItems = Object.keys(props.ingredients)
    .map((ingredient, index) => {
      return (
        <ListItem 
          key={index} 
          primaryText={ingredient.toUpperCase()} 
          rightIcon={<Badge badgeContent={props.ingredients[ingredient]} primary={true} />} />
      );
    });

  return (
    <List>
      {listItems}
    </List>
  );
}

export default OrderSummary;