import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router } from "react-router-dom";

import { App } from './App.js';

render(
  <Router hashType="noslash">
    <App />
  </Router>
  , document.getElementById('root'));
