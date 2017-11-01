import React from 'react';
import Aux from './../../hoc/Aux';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = () => {
	return (
		<Aux>
			<BurgerIngredient type="bread-top" />
			<BurgerIngredient type="cheese" />
			<BurgerIngredient type="meat" />
			<BurgerIngredient type="salad" />
			<BurgerIngredient type="bacon" />
			<BurgerIngredient type="bread-bottom" />
		</Aux>
	);
}

export default Burger;