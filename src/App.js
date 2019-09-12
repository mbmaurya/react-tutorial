import React from 'react';
import logo from './logo.svg';
import './App.css';
import './appStyles.css'
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';

function App() {
  return (
    <div className="App">
      <RefsDemo />
    </div>
  );
}

export default App;
