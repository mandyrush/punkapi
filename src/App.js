import React from 'react';
import './Reset.css';
import './App.css';

import Beers from './components/Beers';

let PUNK_API = 'https://api.punkapi.com/v2/beers';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      beers: [],
      likedBeers: []
    }
  }

  componentDidUpdate() {
    console.log('This is from state ', this.state.beers);
  }

  handleLike = (id) => {
    console.log('Clicked - Id: ', id);
    // Check if the current beer is liked, if it is, remove it from the list
    // If it isn't add it to the list
    if (this.state.likedBeers.includes(id)) {
      let updatedLikes = this.state.likedBeers.filter(beerId => beerId !== id);
      console.log('Updated Likes: ', updatedLikes);
      this.setState({
        likedBeers: updatedLikes
      })
    } else {
      this.setState({
        likedBeers: [...this.state.likedBeers, id]
      });
    }
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
    // Get beer info and store it
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
        <Beers 
          beers={this.state.beers} 
          likedBeers={this.state.likedBeers} 
          handleLike={this.handleLike} />
      </div>
    );
  }
}

export default App;
