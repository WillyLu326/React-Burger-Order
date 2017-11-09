import React from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import OrderSummary from './../../components/OrderSummary/OrderSummary';

import classes from './Modal.css';

class Modal extends React.Component {

  actions = [
    <RaisedButton 
      label="Cancel"
      secondary={true}
      className={classes.btn}
      onClick={this.props.close}
    />,
    <RaisedButton 
      label="Check out"
      primary={true}
      className={classes.btn}
      onClick={this.props.checkout}
    />
  ];

  render () {

    let orderSummary = (
      <div className={classes.summaryContent}>
        <OrderSummary ingredients={this.props.ingredients}/>
      </div>
    );

    if (!this.props.orderSummaryStatus) {
      orderSummary = (
        <CircularProgress />
      );
    }

    return (
      <div>
        <Dialog
          title="Burger Order Summary"
          actions={this.actions}
          modal={true}
          open={this.props.status}
        >
        {orderSummary} 
        </Dialog>
      </div>
    );
  }

} 

export default Modal;