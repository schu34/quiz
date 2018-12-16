import React from "react";
import Question from "./QuizQuestion";
import "../styles/quiz.sass";

export default class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = { questions: props.questions };
  }

  answerHandler = (idx, answer) => {
    this.setState(state => {
      const newState = JSON.parse(JSON.stringify(state));
      newState.questions[idx].answer = answer;
      console.log(newState);
      return newState;
    });
  };

  getEstimate = answers => {
    console.log(answers);
    let a = 0;
    const len = this.props.questions.length;
    for (var i = 0; i < len; i++) {
      const b = answers[i];
      console.log(a, b)
      if (b === true) a += 100;
      else if (b === false) (a += 0);
      else a += 50;
    }
    console.log(a);
    return Math.round((a / len) * 10) / 10;
  };

  render = () => {
    const { title} = this.props;
    const { questions } = this.state;
    const answers = questions.map(a => a.answer);
    const { answerHandler } = this;

    console.log('render')
    return (
      <div>
        <h1>
          {title} {this.getEstimate(answers)}%
        </h1>
        <div>
          {questions.map((q, i) => (
            console.log(q.questionText),
            <Question
              key={q.questionText}
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
