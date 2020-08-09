import React from 'react';
import './App.css';
import { layout } from './Container/Layout/Layout';
import Login from './Components/login/login';

function App() {
  return (
    <div className="App">
      <layout>
        <Login></Login>
      </layout>
    </div>
  );
}

export default App;
