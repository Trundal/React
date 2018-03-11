import React from 'react';

import classes from './Footer.css';

const footer = () => {
    return (
		<div className={classes.footer}>
			<a className={classes.link} href="http://www.vagabonddream.com/">
				Alle News in der Ubersicht <div className={classes.arrow}></div><div className={classes.arrow}></div>
			</a>
		</div>
    );
};

export default footer;