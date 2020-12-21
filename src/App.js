import React, {Component} from 'react'
import './App.css';
import Search from './Search'

class App extends Component {
  render(){
    return (
      <div className="container">
        <h1 className="title">React Movie Search</h1>
        <Search />
      </div>
    )
  }
}

export default App;
