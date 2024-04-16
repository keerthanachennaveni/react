import { Component } from 'react';
import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import Great from './components/Great';
//import Hello from './components/Hello';
import Welcomeclass from './components/welcomeclass';
class App extends Component {
  render(){
  return (
    <div className="App">
     {/* <Great/> */}
    {/* <Hello /> */}
    <Welcomeclass name="karthik" />
    </div>
  );
}
}
export default App;
