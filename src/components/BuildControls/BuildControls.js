import React from 'react';
import Paper from 'material-ui/Paper';
import BuildControl from './BuildControl/BuildControl';
import RaisedButton from 'material-ui/RaisedButton';
import Modal from './../../UI/Modal/Modal';

import classes from './BuildControls.css';

class BuildControls extends React.Component {

  state = {
    modalStatus: false
  }

  style = {
    height: 'auto',
    width: '90%',
    textAlign: 'center',
    display: 'inline-block',
    margin: 'auto',
    backgroundColor: '#EEE',
    position: 'absolute',
    left: '5%',
    right: '5%'
  }

  btnStyle = {
    color: 'white',
    margin: '16px 0'
  }

  controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
  ];

  openModalHandler = () => {
    this.setState({ modalStatus: true });
  }

  checkoutModalHander = () => {
    this.setState({ modalStatus: false });
  }

  render () {
    return (
      <Paper style={this.style} zDepth={2}>
        <p className={classes.price}>Price: ${this.props.price.toFixed(2)}</p>
        {
          this.controls.map((control, index) => {
            return (
              <BuildControl 
                label={control.label} key={index}
                count={this.props.ingredients[control.type]}
                added={() => this.props.addIngredient(control.type)}
                removed={() => this.props.removeIngredient(control.type)} />
            );
          })
        }
        <RaisedButton 
          label="Order Now" 
          style={this.btnStyle}
          primary={true} 
          icon={<i className="material-icons md-light">add_shopping_cart</i>}
          onClick={this.openModalHandler}
        />
        <Modal 
          ingredients={this.props.ingredients}
          status={this.state.modalStatus}
          open={this.openModalHandler}
          checkout={this.checkoutModalHander}
        />
      </Paper>
    );
  }

}

export default BuildControls;