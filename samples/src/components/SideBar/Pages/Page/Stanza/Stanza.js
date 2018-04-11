import React from 'react';

import classes from './Stanza.css';
import Line from '../Line/Line';

const stanza = (props) => {

	return (
		<ul className={classes.stanza}> 
		    {props.stanza.map((object, i) => <Line key={i} line={object} matchFunction={props.matchFunction} isMatched={props.isMatched} match={props.match}/> )}
		</ul>
	);

};

export default stanza;