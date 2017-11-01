import React from 'react';
import Aux from './../../hoc/Aux';
import Burger from './../../components/Burger/Burger';
import BuildControls from './../../components/BuildControls/BuildControls';

class BurgerBuilder extends React.Component {

	state = {
		ingredients: {
			salad: 1,
			cheese: 1,
			meat: 2,
			bacon: 2
		}
	}

	render() {
		return (
			<Aux>
				<Burger ingredients={this.state.ingredients} />
				<BuildControls ingredients={Object.keys(this.state.ingredients)} />
			</Aux>
		);
	}
}

export default BurgerBuilder;