import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React To Dos</h2>
        </div>
        <div className="toDo-App">
            <form>
                <input type="text"/>
            </form>
            <div className="toDo-List">
                <ul>
                    <li><input type="checkbox"/>Learn JSX</li>
                    <li><input type="checkbox"/>Learn React</li>
                    <li><input type="checkbox"/>Learn Spring</li>
                </ul>
            </div>

        </div>
      </div>
    );
  }
}

export default App;
