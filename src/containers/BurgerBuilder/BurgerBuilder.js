import React from 'react';
import Aux from './../../hoc/Aux';
import Burger from './../../components/Burger/Burger';
import BuildControls from './../../components/BuildControls/BuildControls';
import Paper from 'material-ui/Paper';
import BackgroundImage from './../../assets/images/background.jpg';

const BURGER_PRICE = {
	salad: 1.4,
	cheese: 0.8,
	bacon: 1.0,
	meat: 2.4
}

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
		width: '98%',
		height: 'auto',
		left: '1%',
		right: '1%',
		margin: '0px 0px 16px 0px',
		backgroundImage: `url(${BackgroundImage})`,
		backgroundPosition: 'center center'
	}

	// Halders for BuildControls
	addIngredientHandler = (type) => {
		const updatedCount = this.state.ingredients[type] + 1;
		const updatedPrice = this.state.price + BURGER_PRICE[type];

		const updatedIngredients = {...this.state.ingredients};
		updatedIngredients[type] = updatedCount;

		this.setState({
			ingredients: updatedIngredients,
			price: updatedPrice
		});
	}

	removeIngredientHandler = (type) => {
		const updatedCount = this.state.ingredients[type] - 1;
		if (updatedCount < 0) return ;
		const updatedPrice = this.state.price - BURGER_PRICE[type];

		const updatedIngredients = {...this.state.ingredients};
		updatedIngredients[type] = updatedCount;

		this.setState({
			ingredients: updatedIngredients,
			price: updatedPrice
		});
	}

	render() {
		return (
			<Aux>
				<Paper style={this.paperStyle} zDepth={2}>
					<Burger ingredients={this.state.ingredients} />
				</Paper>
				<BuildControls 
					ingredients={this.state.ingredients}
					price={this.state.price}
					addIngredient={this.addIngredientHandler}
					removeIngredient={this.removeIngredientHandler}
				/>
			</Aux>
		);
	}
}

export default BurgerBuilder;