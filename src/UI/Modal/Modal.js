import React from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import OrderSummary from './../../components/OrderSummary/OrderSummary';

import axios from './../../axios-order';
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
      onClick={props.checkout}
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
        <div className={classes.summaryContent}>
          <OrderSummary ingredients={props.ingredients}/>
        </div>
      </Dialog>
    </div>
  );
}

export default Modal;