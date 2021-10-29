import React from 'react';
import './App.css';

import Beers from './components/Beers';

let PUNK_API = 'https://api.punkapi.com/v2/beers';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      beers: []
    }
  }

  componentDidUpdate() {
    console.log('This is from state ', this.state.beers);
  }

  // Promises
  // componentDidMount() {
  //   fetch(PUNK_API)
  //     .then(res => res.json())
  //     .then(data => this.setState({
  //       beers: data
  //     }));
  // }

  // Async / Await
  async componentDidMount() {
    let response = await fetch(PUNK_API);
    let beers = await response.json();
    this.setState({
      beers
    });
  }
  
  render() {
    return (
      <div className="App">
        <h1>Punk API</h1>
        <Beers beers={this.state.beers} />
      </div>
    );
  }
}

export default App;
