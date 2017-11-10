import React from 'react';
import Aux from './../../hoc/Aux';
import AppBar from 'material-ui/AppBar';
import SideMenu from './../../UI/SideMenu/SideMenu';

import classes from './Layout.css';

class Layout extends React.Component {

	state = {
		drawerOpen: false
	}

	burgerClickHandler = () => {
		console.log('click burger');
	}

	render () {
		return (
			<Aux>
				<AppBar 
					title="Burger Order"
					onLeftIconButtonTouchTap={this.burgerClickHandler} />
				<SideMenu open={this.state.drawerOpen} />
				<main className={classes.Content}>
					{this.props.children}
				</main>
			</Aux>
		);
	}
};

export default Layout;