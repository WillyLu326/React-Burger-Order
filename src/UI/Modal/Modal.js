import React from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';

class Modal extends React.Component {
  
  render () {
    const actions = [
      <RaisedButton 
        label="Cancel"
        primary={true}
        onClick={this.props.open}
      />,
      <RaisedButton 
        label="Check out"
        secondary={true}
        onClick={this.props.close}
      />,
    ]

    return (
      <div>
        <Dialog
          title="Burger Order Summary"
          actions={actions}
          modal={true}
          open={this.props.status}
        >
        </Dialog>
      </div>
    );
  }
}

export default Modal;