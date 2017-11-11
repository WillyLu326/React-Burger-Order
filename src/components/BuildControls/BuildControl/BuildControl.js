import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';

import classes from './BuildControl.css';

const BuildControl = (props) => {

  const chipStyle = {
    flex: 1,
    textAlign: 'center',
    marginLeft: '45%'
  }

  return (
    <div className={classes.BuildControl}>
      <div className={classes.label}>
        <Chip style={chipStyle}> 
          <Avatar icon={<i className="material-icons">shop</i>} />
          <span className={classes.bold}> {props.label} </span>
        </Chip>
      </div>

      <div className={classes.fab}>
        <FloatingActionButton mini={true}
          onClick={props.added} >
          <ContentAdd />
        </FloatingActionButton>
      </div>

      <div className={classes.fab}>
        <FloatingActionButton mini={true} secondary={true} disabled={props.count===0}
          onClick={props.removed}>
          <ContentRemove />
        </FloatingActionButton>
      </div>
    </div>
  );
}

export default BuildControl;