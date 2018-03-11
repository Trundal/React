import React, { Component } from 'react';

import classes from './Hero.css';
import NavBar from '../NavBar/NavBar';
import SideBar from '../SideBar/SideBar';

class Hero extends Component {
    render () {
        return (
			<div className={classes.hero}>
				<NavBar />
				<SideBar />
			</div>
        );
    }
}

export default Hero;

