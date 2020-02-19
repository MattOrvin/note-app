import React from 'react';
import './Styles/App.css';
import Header from './Header.js'
import SideBar from './SideBar.js'
import TextField from './TextField.js'
import NoteContainer from './NoteContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <NoteContainer />
    </div>
  );
}

export default App;
