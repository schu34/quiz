import React from 'react'
import '../styles/question.sass'

const Question = ({ questionText }) => <div className="q-container"> 
	<h2 className="q-text">{ questionText }</h2>
	<div className="q-answer-container">
		<button className="q-yes"> Yes </button>
		<button className="q-no"> No </button>
	</div>
</div> 

export default Question