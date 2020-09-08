import React, { Component } from 'react'
import UserContainer from '../containers/UserContainer'
import PageContainer from '../containers/PageContainer'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Мои самые лучшие фотографии</h1>
        </header>
        <UserContainer />
        <PageContainer />
      </div>
    )
  }
}

export default App
