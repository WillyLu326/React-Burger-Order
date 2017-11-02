import React from 'react';
import Paper from 'material-ui/Paper';
import BuildControl from './BuildControl/BuildControl';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';

import classes from './BuildControls.css';

const BuildControls = (props) => {
  const style = {
    height: 'auto',
    width: '90%',
    textAlign: 'center',
    display: 'inline-block',
    margin: 'auto',
    backgroundColor: '#EEE',
    position: 'absolute',
    left: '5%',
    right: '5%'
  }

  const btnStyle = {
    color: 'white',
    margin: '16px 0'
  }

  const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
  ];

  return (
    <Paper style={style} zDepth={2}>
      <p className={classes.price}>Price: ${props.price.toFixed(2)}</p>
      {
        controls.map((control, index) => {
          return (
            <BuildControl 
              label={control.label} key={index}
              count={props.ingredients[control.type]}
              added={() => props.addIngredient(control.type)}
              removed={() => props.removeIngredient(control.type)} />
          );
        })
      }
      <RaisedButton 
        label="Order Now" 
        style={btnStyle}
        primary={true} 
        icon={<i class="material-icons md-light">add_shopping_cart</i>}
      />
    </Paper>
  );
}

export default BuildControls;