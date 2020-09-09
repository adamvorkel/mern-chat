import React, { useState } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import './App.css';

const App = () => {
  const [id, setId] = useLocalStorage('id');

  return (
    <div className="App">
      {id ? <Dashboard id={id} /> : <Login onIdSubmit={setId} />}
    </div>
  );
}

export default App;
