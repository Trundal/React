import React from 'react';
// import './UserInput.css';

const userInput = (props) => {
	return (
		<div className="UserInput">
			<label className="text text--inputLabel">Input new username here: </label>
			<input type='text' className='userInput__input' onChange={props.changed} value={props.username} autoFocus/>
		</div>
	)
}

export default userInput;