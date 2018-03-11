import React from 'react';

import classes from './Page.css';
import Article from './Article/Article';
import Gallery from './Gallery/Gallery';

const page = (props) => {
	const pageClasses = [
		props.pageObject.type === "article" ? classes.page :
		props.pageObject.type === "gallery" ? classes.gallery : null, 
		props.active ? classes.active : null ];

	let articles = Object.keys(props.pageObject.content).map(articleKey => {
		return [...Array(props.pageObject.content[articleKey])].map((_, i) => {
			if (props.pageObject.type === "article") {
				return <Article 
					key={articleKey + i} 
					articleObject={props.pageObject.content[articleKey]} 
					clicked={props.clicked} 
					articleNum={articleKey}
					pageNum={props.pageNum}/>
			} else if (props.pageObject.type === "gallery") {
				return <Gallery key={articleKey + i} articleObject={props.pageObject.content[articleKey]} />
			} else {
				return null
			}
		});
	}).reduce((arr,el) => {
		return arr.concat(el)
	}, [] );

	return ( 
		<li className={pageClasses.join(' ')} >{ articles }</li> 
	);

};

export default page;