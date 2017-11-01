import React from 'react';

class BurgerIngredient extends React.Component {
	render() {
		let ingredient = null;

		switch (this.props.type) {
			case 'bread-top':
				ingredient = <div></div>;
				break;
			case 'bread-bottom':
				ingredient = <div></div>;
				break;
			case 'salad':
				ingredient = <div></div>;
				break;
			case 'cheese':
				ingredient = <div></div>;
				break;
			case 'bacon':
				ingredient = <div></div>;
				break;
			case 'meat':
				ingredient = <div></div>;
				break;
			default:
			ingredient = null;
		}

		return ingredient;
	}
}

export default BurgerIngredient;