import React from 'react';
import Aux from './../../hoc/Aux';
import AppBar from 'material-ui/AppBar';
import classes from './Layout.css';

const Layout = (props) => {
	return (
		<Aux>
			<AppBar title="Burger Order" />
			<main className={classes.Content}>
				{props.children}
			</main>
		</Aux>
		
	);
};

export default Layout;