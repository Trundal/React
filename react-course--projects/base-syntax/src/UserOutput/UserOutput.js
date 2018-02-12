import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
	return (
		<div className = "UserOutput">
			<p className = "text text--username">My Username: {props.username} </p>
			<p className = "text text--paragraph">{props.text}</p>
		</div>
	)
}

export default userOutput;