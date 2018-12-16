import React from "react";
import Question from "./QuizQuestion";
import "../styles/quiz.sass";

export default class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state =[]; 
  }

  answerHandler = (idx, answer )=> {
    const i = parseInt
    this.setState(state=>{
      const newState = JSON.parse(JSON.stringify(state));
      newState.questions[idx].answer = answer;
      return newState;
    });
  }

  getEstimate = (answers)=>{
    console.log(answers)
    let a = 0
    const len = this.props.questions.length
    for(var i =0; i<len ; i++){
      const b = answers[i]
      if(b === true) a+=100;
      else if(b === false) return a+=0;
      else a+=50;
    }
    console.log(a)
    return Math.round((a/len*10))/10
  }

  render = () => {
    const { title, questions } = this.props;
    const  answers  = questions.map(a=>a.answer);
    const { answerHandler } = this;

    return (
      <div>
        <h1> {title} {this.getEstimate(answers)}%</h1>
        <div>
          {questions.map((q, i) => (
            <Question
              yesHandler={() => answerHandler(i, true)}
              noHandler={() => answerHandler(i, false)}
              answer={answers[i]}
              {...q}
            />
          ))}
        </div>
      </div>
    );
  };
}
