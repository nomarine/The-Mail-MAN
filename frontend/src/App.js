import React from 'react';

import Routes from './routes';
import Header from './pages/Header/index';

import './global.css'

function App() {
  return (
    <div>
      <Header/>
      <Routes/>
    </div>
  );
}

export default App;
