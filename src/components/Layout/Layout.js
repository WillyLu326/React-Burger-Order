import React from 'react';
import Aux from './../../hoc/Aux';
import AppBar from 'material-ui/AppBar';

const Layout = (props) => {
	return (
		<Aux>
			<AppBar title="Burger Order" />
			<main>
				props.children
			</main>
		</Aux>
		
	);
};

export default Layout;