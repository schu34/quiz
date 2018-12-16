import React from 'react'
import classNames from 'classnames';
import '../styles/question.sass'

const Question = ({ questionText, yesHandler, noHandler, answer }) => <div className="q-container"> 
	<h2 className="q-text">{ questionText }</h2>
	<div className="q-answer-container">
		<button className={classNames('q-yes', {clicked: answer === true })} onClick={yesHandler}> Yes </button>
		<button className={classNames('q-no', {clicked: answer === false })} onClick={noHandler}> No </button>
	</div>
</div> 

export default Question;