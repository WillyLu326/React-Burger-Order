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

  const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
  ]

  return (
    <Paper style={style} zDepth={3}>
      {
        controls.map((control, index) => {
          return <BuildControl label={control.label} key={index} />
        })
      }
    </Paper>
  );
}

export default BuildControls;