import React, {
  Component
} from 'react';
import logo from './logo.svg';
import quizData from './quizData.json'
import Quiz from './components/Quiz';
import Error from './components/Error';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quizData: null,
    }
  }
  componentDidMount() {
    const path = window.location.pathname.split('/')[1];

    this.setState({
      quizData: quizData[path]
    })
  }

  render() {
    console.log(this);
    const {
      quizData
    } = this.state;

    if (quizData) {

      return <Quiz {...quizData} / >
    } else return <Error / >
  }
}

export default App;