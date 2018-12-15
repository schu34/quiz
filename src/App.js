import React from 'react';
import {Helmet} from 'react-helmet'
import quizData from './quizData.json'
import Quiz from './components/Quiz';
import Error from './components/Error';
import Page from './components/Page';
import './App.scss';


class App extends React.Component {
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
    } else {
      return <Error / >
    }
  }

  render() {
    console.log(this);
    const {
      quizData
    } = this.state;
    return <Page>
      <Helmet>
        <title>Quizly | {quizData ? quizData.title : "Quiz not found"}</title>
      </Helmet>
      {this.renderInner(quizData)}
    </Page>
  }
}

export default App;