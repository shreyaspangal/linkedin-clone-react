import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import Login from './Login';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
// CSS
import './App.css';

function App() {

  const user = useSelector(selectUser);

  return (
    <div className="app">
      <Header />
      {
        !user ? (
          <Login />
        ) : (
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        )
      }
    </div >
  );
}

export default App;
