import React from 'react';

import classes from './Gallery.css';

const article = (props) => {
	const path = "images/";

    return (
    	<div className={classes.image}><img src={path + props.articleObject.image}/></div>
    );
};

export default article;