import React from 'react';

import classes from './Article.css';
import Image from '../../../Image/Image';
import Poem from '../Poem/Poem';

const article = (props) => {
	const copyClasses = [classes.copy, props.articleObject.copyOpen ? classes.copyOpen : null ];
	const twirlClasses = [classes.arrow, props.articleObject.copyOpen ? classes.twirlDown : classes.twirlUp ];

    return (
    	<div className={classes.article}>
			<div className={classes.summary}>
				{ props.articleObject.image ? <Image image={props.articleObject.image} /> : null }
				<div className={classes.header}>
					<div className={classes.date}>{props.articleObject.date}</div>
					<div className={classes.headline}>{props.articleObject.headline}</div>
					<div className={classes.teaser}>{props.articleObject.teaser}</div>
					{ props.articleObject.poem ? <Poem poem={props.articleObject.poem} matchFunction={props.matchFunction} isMatched={props.articleObject.matchedOnce} match={props.articleObject.match}/> : null }
					{ props.articleObject.copy ? 
						<div className={classes.copyLink} 
							onClick={props.clicked}
							data-article={props.articleNum}
							data-page={props.pageNum}>
							<div className={twirlClasses.join(' ')}></div>
							<div className={classes.linkText}> mehr Informationen</div> 
						</div>
						: null 
					}
				</div>
			</div>
			{ props.articleObject.copy ? <div className={copyClasses.join(' ')}>{props.articleObject.copy}</div> : null }
		</div>
    )
};

export default article;