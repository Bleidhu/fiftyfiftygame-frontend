import React, { Component } from 'react';
import Score from '../components/Score/Score';
import Quote from '../components/Quote/Quote';
import AnswerButton from '../components/AnswerButton/Answerbutton';
import './App.css';
import NextButton from '../components/NextButton/NextButton';

class App extends Component {

  constructor() {
    super();
    this.state = {
      rank: 10,
      quote: 'a'
    }
  }




  checkIfSelectedValid = (sender) => {
    fetch('http://localhost:3002/validateQuote', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        {
          selection: sender,
          quote: this.state.quote
        }),
    }).then(response => response.json()).then(data => console.log(data)).catch(err => console.log(err));
  }

  requestNewQuote = () => {
    fetch('http://localhost:3002/quote').then(response => response.text()).then(data => {
      this.setState({ quote: data.toString() })
      console.log(data);
    }).catch(err => console.log(err));
  }

  componentDidMount() {
  }

  onButtonSelected = (buttonType) => {
    this.setState(Object.assign(this.state.selected, buttonType));
    //checkIfSelectedValid()
  }
  render() {
    const { route, rank, quote } = this.state;
    return (
      <div className="App">
        <div>
          <Score
            rank={rank}
          />
          <Quote
            quote={quote}
          />

          <AnswerButton ansNumber={"g"} validateAnswer={this.checkIfSelectedValid} />
          <AnswerButton ansNumber={"ah"} validateAnswer={this.checkIfSelectedValid} />

          <NextButton requestNewQuote={this.requestNewQuote} />
        </div>
      </div>
    );
  }
}

export default App;
