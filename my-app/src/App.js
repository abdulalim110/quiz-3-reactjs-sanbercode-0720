import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import './App.css';
import './quiz/style.css';
import Routes from './quiz/Routes';
import {LoginProvider} from './quiz/LoginContext';

function App() {
  return (
    <>
    <div>
      <LoginProvider>
      <Router>
        <Routes/>
      </Router>
      </LoginProvider>
    </div>
    </>
  );
}

export default App;
