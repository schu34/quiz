import React from 'react';
import Question from './QuizQuestion'
import './quiz.sass';

const Quiz = ({title, questions})=>( 
<div>
	<h1> {title}</h1>
	<div>
		{questions.map(q=><Question {...q} />)}
	</div>
</div> 
)

export default Quiz;