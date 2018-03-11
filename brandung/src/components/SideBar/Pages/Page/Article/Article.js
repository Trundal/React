import React from 'react';

import classes from './Article.css';
import Image from '../../../Image/Image';

const article = (props) => {
	const copyClasses = [classes.copy, props.articleObject.copyOpen ? classes.copyOpen : null ];
	const twirlClasses = [classes.arrow, props.articleObject.copyOpen ? classes.twirlDown : classes.twirlUp ];

    return (
    	<div className={classes.article}>
			<div className={classes.summary}>
				<Image image={props.articleObject.image} />
{/*    			<div className={classes.image}><img src={props.articleObject.image}/></div>*/}
				<div className={classes.header}>
					<div className={classes.date}>{props.articleObject.date}</div>
					<div className={classes.headline}>{props.articleObject.headline}</div>
					<div className={classes.teaser}>{props.articleObject.teaser}</div>
					<div className={classes.copyLink} 
						onClick={props.clicked}
						data-article={props.articleNum}
						data-page={props.pageNum}>
						<div className={twirlClasses.join(' ')}></div>
						<div className={classes.linkText}> mehr Informationen</div>
					</div>
				</div>
			</div>
			<div className={copyClasses.join(' ')}>{props.articleObject.copy}</div>
		</div>
    );
};

export default article;