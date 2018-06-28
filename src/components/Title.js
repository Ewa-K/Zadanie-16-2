import React from 'react';
import todo from '../containers/App';

function Title(props) {
	
	return (
		<div>
			<h1>To Do</h1>
			<p>Liczba zadań: { todo.length }</p>
		</div>
	);	
}

export default Title;