import React from 'react'

const Question = ({ questionText }) => <div> 
	<h2>{ questionText }</h2>
	<div>
		<button> yes </button>
		<button> no </button>
	</div>
</div> 

export default Question