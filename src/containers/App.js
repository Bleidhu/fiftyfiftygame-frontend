import React, { Component } from 'react';
import Score from '../components/Score';
import Quote from '../components/Quote';
import './App.css';

class App extends Component{

  constructor() {
    super();
    this.state = {
      rank: 10,
      route: 'home',
      quote: 'lolz'
    }
  }

  checkIfSelectedValid = (selected, quote) => {
    
  }

  onButtonSelected = (buttonType) => {
    this.setState(Object.assign(this.state.selected, buttonType));
    //checkIfSelectedValid()
  }
 render() {
  const {route, rank, quote} = this.state;
  return (
    <div className="App">
      { route === 'home'
          ? <div>
              <Score
                rank={rank}
              />
              <Quote
                quote={quote}
              />
            </div>
          : (
             /* route === 'signin'
             ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
             : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/> */
             <p>loggedin</p>
            )
        }
    </div>
  );
  }
}

export default App;
