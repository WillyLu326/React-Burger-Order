import React from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';

import classes from './Modal.css';

const Modal = (props) => {

  const actions = [
    <RaisedButton 
      label="Cancel"
      secondary={true}
      className={classes.btn}
      onClick={props.close}
    />,
    <RaisedButton 
      label="Check out"
      primary={true}
      className={classes.btn}
      onClick={props.close}
    />
  ];

  return (
    <div>
      <Dialog
        title="Burger Order Summary"
        actions={actions}
        modal={true}
        open={props.status}
      >
      </Dialog>
    </div>
  );
}

export default Modal;