import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';


class App extends Component {
  state = {
    Users: [
      { username: 'myUsername', text: 'My second Paragraph - to which nothing happens as part of this exercise.' },
      { username: 'myOtherUsername', text: 'My second Paragraph - which is oh-so different from the first.' },
    ]
  }

  inputUsernameHandler = (event) => {
    this.setState( {
      Users: [
        { username: event.target.value, text: 'My second Paragraph - to which nothing happens as part of this exercise.' },
        { username: 'myOtherUsername', text: 'My second Paragraph - which is oh-so different from the first.' },
      ]
    } )
  }

  render() {
    const style = {
      backgroundColor: 'white',
      fontSize: '1.2em',
      border: '1px solid #333',
      padding: '20px',
      margin: 'auto',
      width: '60%',
      fontAlign: 'center',
      fontWieght: 'bold',
      borderRadius: '2px'
    };

    return (
      <div className="App">
        <div           
          style={style}>
          <UserInput
            username={this.state.Users[0].username} 
            changed={this.inputUsernameHandler} />
        </div>
        <UserOutput 
          username={this.state.Users[0].username} 
          text={this.state.Users[0].text} /> 
        <UserOutput 
          username={this.state.Users[1].username} 
          text={this.state.Users[1].text} /> 
      </div>
    );
  }
}

export default App;
