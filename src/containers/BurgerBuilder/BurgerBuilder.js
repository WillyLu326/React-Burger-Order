import React from 'react';
import Aux from './../../hoc/Aux';
import Burger from './../../components/Burger/Burger';
import BuildControls from './../../components/BuildControls/BuildControls';
import Paper from 'material-ui/Paper';

class BurgerBuilder extends React.Component {

	state = {
		ingredients: {
			salad: 0,
			cheese: 0,
			meat: 0,
			bacon: 0
		},
		price: 0.6
	}

	// Paper Style
	paperStyle = {
		position: 'relative',
		width: '90%',
		height: 'auto',
		left: '5%',
		right: '5%',
		backgroundColor: '#6AB3F4',
		margin: '0px 0px 16px 0px'
	}

	// Halders for BuildControls
	addIngredientHandler = (type) => {

	}

	removeIngredientHandler = (type) => {

	}

	render() {
		return (
			<Aux>
				<Paper style={this.paperStyle} zDepth={2}>
					<Burger ingredients={this.state.ingredients} />
				</Paper>
				<BuildControls 
					 />
			</Aux>
		);
	}
}

export default BurgerBuilder;