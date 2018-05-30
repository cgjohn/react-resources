import React, { Component } from 'react';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Aux from '../Aux/Aux';
import classes from './Layout.css';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
	state = {
		showSideDrawer: false,
	}

	sideDrawerToggle = () => {
		this.setState((prevState) => {
			return {showSideDrawer: !prevState.showSideDrawer}
		})
	};

	render () {
		return (
			<Aux>
				<Toolbar menuClick={this.sideDrawerToggle}/>
				<SideDrawer 
					open={this.state.showSideDrawer} 
					closed={this.sideDrawerToggle}/>
				<main className={classes.Content}>
					{this.props.children}
				</main>
			</Aux>
		);
	}
};
export default Layout;

