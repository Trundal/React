import React from 'react';

import classes from './Poem.css';
import Stanza from '../Stanza/Stanza';

const poem = (props) => {

	return (
		<div className={classes.poem}>
    		{props.poem.map((object, i) => <Stanza key={i} stanza={object} matchFunction={props.matchFunction} isMatched={props.isMatched} match={props.match}/> )}
		</div>
	);

};

export default poem;