import React from 'react';
import Paper from 'material-ui/Paper';
import BuildControl from './BuildControl/BuildControl';

const BuildControls = (props) => {
  const style = {
    height: '350px',
    width: '100%',
  }
  return (
    <Paper style={style}>
      {
        props.ingredients.map((ingredient, index) => {
          return <BuildControl ingredient={ingredient} key={index} />
        })
      }
    </Paper>
  );
}

export default BuildControls;