import React from 'react';
import './App.css';
import AddWord from './AddWork/AddWork';
import ListWork from './ListWork/ListWork';

function App() {
  return (
    <div className="cont">
      {/* Form add new work */}
      <AddWord></AddWord>
      <ListWork></ListWork>
    </div>
  );
}

export default App;
