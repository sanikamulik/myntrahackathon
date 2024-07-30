import React from 'react';
import './App.css';
import VoteAndWin from './components/VoteAndWin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainVote from './components/MainVote';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<VoteAndWin />}></Route>
        <Route path="/MainVote" element={<MainVote />} /> 
      </Routes>
    </Router>
  );
}

export default App;
