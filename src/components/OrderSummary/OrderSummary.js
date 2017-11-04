import React from 'react';
import { List, ListItem } from 'material-ui/List';

const OrderSummary = (props) => {
  const listItems = Object.keys(props.ingredients)
    .map((ingredient, index) => {
      return (
        <ListItem key={index} primaryText={ingredient.toUpperCase()} rightIcon={<div>{props.ingredients[ingredient]}</div>} />
      );
    }) 

  return (
    <List>
      {listItems}
    </List>
  );
}

export default OrderSummary;