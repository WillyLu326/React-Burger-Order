import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Badge from 'material-ui/Badge';
import Aux from './../../hoc/Aux';

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
    <Aux>
      <List>
        {listItems}
      </List>
    </Aux>
  );
}

export default OrderSummary;