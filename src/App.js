import React, {
  Component
} from 'react';
import quizData from './quizData.json'
import Quiz from './components/Quiz';
import Error from './components/Error';
import Page from './components/Page';
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

  renderInner(quizData){

    if (quizData) {

      return <Quiz {...quizData} / >
    } else return <Error / >
  }

  render() {
    console.log(this);
    const {
      quizData
    } = this.state;
    return <Page>
      {this.renderInner(quizData)}
    </Page>
  }
}

export default App;