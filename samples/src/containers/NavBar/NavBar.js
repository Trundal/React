import React, { Component } from 'react';

import classes from './navBar.css';
import Logo from '../../components/Logo/Logo';

class NavBar extends Component {
    render () {
        return (
			<nav className={classes.navBar}>
				<Logo />
				<div className={classes.headline}>Umsetzung - Korey Powell</div>
			</nav>
        );
    }
}

export default NavBar;