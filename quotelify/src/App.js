import React from 'react'
import './App.css'
import NewQuote from './components/newQuote'
import SavedQuote from './components/savedQuote'

function App() {
  return (
    <div className="App">
      <h1>My Motivation Today</h1>

      <NewQuote />

      <h2>★ Favorite Quotes ★</h2>
      
      <SavedQuote />
    </div>
  );
}

export default App;
