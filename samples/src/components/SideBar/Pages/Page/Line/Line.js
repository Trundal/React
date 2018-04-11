import React from 'react';

import classes from './Line.css';

const line = (props) => {
	const match = props.match;
	let checkedLine = props.line;

	if ( checkedLine.search(match) !== -1 ) { 
		checkedLine = checkedLine.split(match);
		checkedLine.splice(1, 0 , <span className={classes.highlight} key="highlight">{ match }</span> );
	}

	return ( <li> { checkedLine } </li> );

};

export default line;