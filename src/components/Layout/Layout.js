import React from 'react';
import Aux from './../../hoc/Aux';
import AppBar from 'material-ui/AppBar';
import SideMenu from './../../UI/SideMenu/SideMenu';

import classes from './Layout.css';

class Layout extends React.Component {

	state = {
		drawerOpen: false
	}

	burgerOpenHandler = () => {
		this.setState({ drawerOpen: true })
	}

	burgerCloseHandler = () => {
		this.setState({ drawerOpen: false })
	}

	render () {
		return (
			<Aux>
				<AppBar 
					title="Burger Order"
					onLeftIconButtonTouchTap={this.burgerOpenHandler} />
				<SideMenu 
					open={this.state.drawerOpen} 
					closed={this.burgerCloseHandler}/>
				<main className={classes.Content}>
					{this.props.children}
				</main>
			</Aux>
		);
	}
};

export default Layout;