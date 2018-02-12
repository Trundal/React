import React, { Component } from 'react';
import './App.css';
import Radium from 'radium'

import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    inputText: '',
    validation: '',
    charList: []
  }

  charClickHandler = (index) => { 
    let currentArray = [...this.state.charList];
    currentArray.splice(index, 1)
    const currentString = currentArray.join('');

    this.setState( { 
      inputText: currentString,
      validation: ValidationComponent(currentString.length),
      charList: [...currentString.split('')]
    } )
  }

  inputTextHandler = (event) => { 
    this.setState( {
      inputText: event.target.value,
      validation: ValidationComponent(event.target.value.length),
      charList: [...event.target.value.split('')]
    } )
  }

  render() {

    let characters = null;

    if ( this.state.charList ) {
      characters = (
        <div className = "charComponents">
          {this.state.charList.map((character, index) => {
            return <CharComponent
              click={() => this.charClickHandler(index)}
              char={character}
              key={index}
              />
          })}
        </div>
      );
    }

    return (

      <div className="App">
        <h1>Project Requirements Here...</h1>
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

        <h1>Solution Here...</h1>

        <div>
          <label>Some amazing stuff is about to happen: </label>
          <input type="text" onChange={this.inputTextHandler} placeholder="please enter text" value={this.state.inputText} autoFocus/>
        </div>

        <div>
          <p>Length of entered text: { this.state.inputText.length }</p>
        </div>
        {this.state.validation} 
        { characters }
      </div>
    );
  }
}

export default Radium(App);
