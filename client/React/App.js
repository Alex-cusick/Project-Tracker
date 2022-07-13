import React from 'react';
import NavBar from './NavBar.js';
import Register from './Register.js';
import Content from './Content.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => (
  <main className='App'>
    < NavBar />
    < Register />
    < Content />
  </main>
);

export default App;