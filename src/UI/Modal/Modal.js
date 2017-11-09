import React from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import OrderSummary from './../../components/OrderSummary/OrderSummary';

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

  let orderSummary = null;

  if (props.spinnerShowing) {
    orderSummary = (
      <CircularProgress />
    );
  } else {
    orderSummary = (
      <div className={classes.summaryContent}>
        <OrderSummary ingredients={props.ingredients}/>
      </div>
    );
  }

  return (
    <div>
      <Dialog
        title="Burger Order Summary"
        actions={actions}
        modal={true}
        open={props.status}
      >
        {orderSummary} 
      </Dialog>
    </div>
  );
}


export default Modal;