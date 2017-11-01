import React from 'react';
import Aux from './../../hoc/Aux';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

import classes from './Burger.css';

const Burger = () => {
	return (
		<div className={classes.Burger}>
			<BurgerIngredient type="bread-top" />
			<BurgerIngredient type="cheese" />
			<BurgerIngredient type="meat" />
			<BurgerIngredient type="salad" />
			<BurgerIngredient type="bacon" />
			<BurgerIngredient type="bread-bottom" />
		</div>
	);
}

export default Burger;