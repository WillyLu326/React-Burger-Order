import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';

import classes from './BuildControl.css';

const BuildControl = (props) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.ingredient}>{props.ingredient}</div>
      <div className={classes.fab}>
        <FloatingActionButton mini={true}>
          <ContentAdd />
        </FloatingActionButton>
      </div>
      <div className={classes.fab}>
        <FloatingActionButton mini={true} secondary={true}>
          <ContentRemove />
        </FloatingActionButton>
      </div>
    </div>
  );
}

export default BuildControl;