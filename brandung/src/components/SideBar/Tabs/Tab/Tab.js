import React from 'react';

import classes from './Tab.css';

const tab = (props) => {
	const tabClasses = [classes.tab, props.active ? classes.active : null ];

    return (
		<li 
			className={tabClasses.join(' ')} 
			onClick={props.clicked}
			data-id={props.tabNum} > 
			{props.title}
		</li>
    );
};

export default tab;