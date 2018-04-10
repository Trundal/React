import React from 'react';

import classes from './Pages.css';
import Page from './Page/Page';

const pages = (props) => {
	let page = Object.keys(props.pages).map(pageKey => {
		return [...Array(props.pages[pageKey])].map((_, i) => {
			return <Page key={pageKey + i} 
				pageObject={props.pages[pageKey]} 
				active={props.pages[pageKey].active} 
				clicked={props.clicked}
				matchFunction={props.matchFunction}
				pageNum={pageKey}/>
		});
	}).reduce((arr,el) => {
		return arr.concat(el)
	}, [] );

    return (
		<ul className={classes.content}>{ page }</ul>
    );
};

export default pages;