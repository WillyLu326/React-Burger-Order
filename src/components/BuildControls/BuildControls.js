import React from 'react';
import Aux from './../../hoc/Aux';
import BuildControl from './BuildControl/BuildControl';

const BuildControls = (props) => {
  return (
    <Aux>
      {
        props.ingredients.map((ingredient, index) => {
          return <BuildControl ingredient={ingredient} key={index} />
        })
      }
    </Aux>
  );
}

export default BuildControls;