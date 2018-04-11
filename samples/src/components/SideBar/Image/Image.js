import React from 'react';

import classes from './Image.css';
import imageTest from '../../../assets/img/bones.jpg';

const image = (props) => {
	const path = "images/";

	return (
		<div className={classes.image}><img src={ path + props.image } /></div>
	);

};

export default image;