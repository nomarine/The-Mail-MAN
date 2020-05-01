import React from 'react';

import Routes from './routes';
import Header from './pages/Header/index';

import Logon from './utilities/logon';

import './global.css'

function App() {
  return (
    <div>
      {Logon()}
      <Header/>
      <Routes/>
    </div>
  );
}

export default App;
