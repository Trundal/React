import React from 'react';
// import './ValidationComponent.css';

const ValidationComponent = (len) => {
	let response = '';
	if ( len < 5 ) response = (<p className="text text--error">Length of text too short. Please write more.</p>);
	else response = (<p className="text text--success">Length of text is acceptable</p>)
	return (
		<div className = "ValidationComponent">
			{ response }
		</div>
	)
}

export default ValidationComponent;