import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

import classes from './Burger.css';

const Burger = (props) => {

	let convertedIngredients = Object.keys(props.ingredients)
		.map(ingredient => {
			return [...Array(props.ingredients[ingredient]).fill(ingredient)]
				.map((_, index) => {
					return (
						<BurgerIngredient type={ingredient} key={ingredient + index}/>
					);
				})
		})
		.reduce((initArray, curtArray) => initArray = initArray.concat(curtArray), []);

	if (convertedIngredients.length === 0) {
		convertedIngredients = <p>Plz Add Some Ingredients</p>
	}

	return (
		<div className={classes.Burger}>
			<BurgerIngredient type="bread-top" />
			{convertedIngredients}
			<BurgerIngredient type="bread-bottom" />
		</div>
	);
}

export default Burger;