import React from 'react';
import Paper from 'material-ui/Paper';
import BuildControl from './BuildControl/BuildControl';
import RaisedButton from 'material-ui/RaisedButton';
import Modal from './../../UI/Modal/Modal';

import axios from './../../axios-order';
import classes from './BuildControls.css';

class BuildControls extends React.Component {

  state = {
    modalStatus: false,
    spinnerShowing: false
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

  closeModalHandler = () => {
    this.setState({ modalStatus: false });
  }

  checkoutModalHander = () => {
    const orderInfo = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Willy Lu',
        address: 'New Jersy',
        country: 'US'
      }
    }

    this.spinnerShowingHandler(true);

    axios.post('/orders.json', orderInfo)
      .then(res => {
        console.log('order res', res);
        this.closeModalHandler();
        this.spinnerShowingHandler(false);
      })
      .catch(err => {
        console.log('order err', err);
        this.closeModalHandler();    
        this.spinnerShowingHandler(false);        
      });
  }

  spinnerShowingHandler = (status) => {
    this.setState({ spinnerShowing: status });
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
          close={this.closeModalHandler}
          checkout={this.checkoutModalHander}
          spinnerShowing={this.state.spinnerShowing}
        />
      </Paper>
    );
  }

}

export default BuildControls;