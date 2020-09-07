import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
state = {
  text: ''
}

textChanger = (event) => {
  this.setState( {text: event.target.value} ); 

}
textDelete =(index) => {
  const allText = this.state.text.split('');
  allText.splice(index, 1);
  const updateText = allText.join('');
  this.setState({text: updateText});
}

render() {
const charList = this.state.text.split('').map((char, index)=> {
   return <Char character={char} key={index} clicked={() => this.textDelete(index)}/>// index rasom cia nes turim emty string
});


  return (
    <div className="App">
    <input 
    type="text" 
    onChange={this.textChanger} 
    value={this.state.text} />
    <p>{this.state.text}</p>
    <Validation textLength={this.state.text.length}/>
    {charList}
    </div>
  );
}
  
}

export default App;
