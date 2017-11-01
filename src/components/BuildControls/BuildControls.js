import React from 'react';
import Paper from 'material-ui/Paper';
import BuildControl from './BuildControl/BuildControl';

const BuildControls = (props) => {
  const style = {
    height: '280px',
    width: '90%',
    textAlign: 'center',
    display: 'inline-block',
    margin: 'auto',
    backgroundColor: '#EEE',
    position: 'absolute',
    left: '5%',
    right: '5%'
  }
  return (
    <Paper style={style} zDepth={3}>
      {
        props.ingredients.map((ingredient, index) => {
          return <BuildControl ingredient={ingredient} key={index} />
        })
      }
    </Paper>
  );
}

export default BuildControls;