import React, { useState } from 'react';

import Login from './components/Login';
import './App.css';

const App = () => {
  const [id, setId] = useState();

  return (
    <div className="App">
      {id}
      <Login onIdSubmit={setId} />
    </div>
  );
}

export default App;
