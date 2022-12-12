import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import './Header.css';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div class="app__body">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    </div>
  );
}

export default App;
