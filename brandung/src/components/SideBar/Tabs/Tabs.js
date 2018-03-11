import React from 'react';

import classes from './Tabs.css';
import Tab from './Tab/Tab';

const tabs = (props) => {
	let pageTabs = Object.keys(props.pages).map(pageKey => {
		return [...Array(props.pages[pageKey])].map((_, i) => { 
			return <Tab key={pageKey + i} title={props.pages[pageKey].title} active={props.pages[pageKey].active} clicked={props.clicked} tabNum={pageKey}/>
		});
	}).reduce((arr,el) => {
		return arr.concat(el)
	}, [] );

    return (
		<ul className={classes.menu}>{ pageTabs }</ul>
    );
};

export default tabs;
